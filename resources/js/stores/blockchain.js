import { defineStore } from 'pinia';
import * as ethers from 'ethers';
import axios from 'axios';
import Contract from '../../abi/ThirstyThirstySeason01.json';
import {
  CONTRACT_ADDR,
  PRICE_CELLAR,
  PRICE_TABLE,
  PRICE_TABLE_GOLD,
  TIER_CELLAR,
  TIER_TABLE,
  TIER_TABLE_GOLD,
  ERR_MSG_FUND,
  ERR_MSG_MINT,
  ERR_MSG_CLAIMED,
  ERR_MSG_UNKNOWN
} from '../constants';
import { useModalStore } from './modal';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = '/api/';

const { ethereum } = window;

let provider;
let signer;
let contract;

export const useBlockchainStore = defineStore({
  id: 'blockchain',
  state: () => ({
    isInitialized: false,
    isReady: false,
    isMinting: false,
    canMint: false,
    publicKey: '',
    numMintedCellar: 0,
    numMintedTable: 0,
    isGoldlisted: false,
    network: '',
    openModal: null
  }),
  getters: {
    isWalletConnected: state => {
      return !!state.publicKey;
    }
  },
  actions: {
    async initBlockchain() {
      const modalStore = useModalStore();
      this.openModal = modalStore.openModal;

      if (!ethereum) {
        this.openModal('Digital wallet needed', 'Please install the MetaMask wallet extension on your browser to proceed', '⚠️', 'bg-red-100');
      }

      provider = new ethers.providers.Web3Provider(ethereum, 'any');
      signer = provider.getSigner();

      contract = new ethers.Contract(CONTRACT_ADDR, Contract.abi, signer);

      const { chainId, name } = await provider.getNetwork();
      if (chainId === 1337 || name === 'unknown') {
        this.network = 'localhost';
      } else {
        this.network = name;
      }

      console.log(`[INFO] Connected on network ${this.network}`);

      this.isInitialized = true;
      this.publicKey = await this.getAccountPubKey();

      if (this.publicKey) {
        await this.checkGoldlisted();
        await this.fetchMintedPerTiers();
        this.canMint = true;
      }

      this.isReady = true;
    },

    async checkGoldlisted() {
      try {
        const pkey = await signer.getAddress()
        console.log('pkey', pkey)
        const { data: { goldlisted } } = await axios.get(`list/${pkey}`);
        this.isGoldlisted = !!goldlisted;
      } catch (error) {
        this.openModal('Digital wallet needed', 'Please install the MetaMask wallet extension on your browser to proceed', '⚠️', 'bg-red-100');
      }
    },

    async getAccountPubKey() {
      if (!this.isInitialized) return;
      const accounts = await provider.listAccounts();
      return accounts.length > 0 ? accounts[0] : '';
    },

    async connectWallet() {
      if (!this.isInitialized) throw new Error('Not initialized');

      try {
        await provider.send('eth_requestAccounts', []);
        this.publicKey = await this.getAccountPubKey();
        if (this.publicKey) {
          await this.checkGoldlisted();
          await this.fetchMintedPerTiers();
          this.canMint = true;
        } else {
          throw new Error('Failed accessing account public key');
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchMintedPerTiers() {
      const [cellar, table, tableGold, frens] = await contract.mintedPerTiers();
      this.numMintedCellar = +cellar.toString();
      this.numMintedTable = +table.toString() + (+tableGold.toString()) + (+frens.toString());
    },

    async mint(tierName) {
      if (this.isMinting) return;
      if (![TIER_CELLAR, TIER_TABLE, TIER_TABLE_GOLD].includes(tierName)) {
        throw new Error('Invalid tier name');
      }

      this.isMinting = true;

      console.log(`Attempting to mint tier "${tierName}"`);

      this.openModal('Minting...', 'Please complete process within your wallet and wait for the process to complete.', '⛏️', 'bg-yellow-100');

      const prices = {
        [TIER_CELLAR]: PRICE_CELLAR,
        [TIER_TABLE]: PRICE_TABLE,
        [TIER_TABLE_GOLD]: PRICE_TABLE_GOLD
      };

      const price = ethers.utils.parseUnits(prices[tierName].toString(), 'ether');

      try {
        let tx;

        if (tierName === TIER_CELLAR) {
          tx = await contract.mintCellar({ value: price });
        }

        if (tierName === TIER_TABLE) {
          tx = await contract.mintTable({ value: price });
        }

        if (tierName === TIER_TABLE_GOLD) {
          const pkey = await signer.getAddress();
          const { data: { proof } } = await axios.get(`proof/${pkey}`);
          tx = await contract.mintGold(proof, { value: price });
        }

        const { transactionHash } = await tx.wait();

        this.openModal(
          'Mint successful!',
          `Your NFT should take a little time to appear in your wallet. You can verify and follow the transaction by clicking <a href="${this.txLink(transactionHash)}" target="_blank" noopener noreferrer class="underline underline-offset-1">here</a>.`,
          '🎉', 'bg-green-100'
        );

        await this.fetchMintedPerTiers();
      } catch (error) {
        console.log(error)
        const message = this.extractErrorMessage(error)
        this.openModal('Minting failed', message, '🙁', 'bg-red-100');
      } finally {
        this.isMinting = false;
      }
    },

    extractErrorMessage(error) {
      const message = error.data ? error.data.message : error.toString()

      if (message && message.toLowerCase().includes('not enough fund')) {
        return ERR_MSG_FUND;
      }
      if (message && message.toLowerCase().includes('no more mint for user')) {
        this.canMint = false;
        return ERR_MSG_MINT;
      }
      if (message && message.toLowerCase().includes('no more mint for user')) {
        this.canMint = false;
        return ERR_MSG_MINT;
      }
      if (message && message.toLowerCase().includes('address has already claimed')) {
        this.isGoldlisted = false;
        return ERR_MSG_CLAIMED;
      }
      return ERR_MSG_UNKNOWN;
    },

    txLink(hash) {
      if (['rinkeby', 'homestead'].includes(this.network)) {
        return `https://${this.network === 'rinkeby' ? 'rinkeby.' : '' }etherscan.io/tx/${hash}`;
      }
      return '';
    }
  }
});
