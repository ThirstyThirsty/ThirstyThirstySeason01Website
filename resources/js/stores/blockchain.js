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
  TIER_FRENS,
  TIER_CELLAR_ID,
  TIER_TABLE_ID,
  TIER_TABLE_GOLD_ID,
  TIER_FRENS_ID,
  ERR_MSG_FUND,
  ERR_MSG_MINT,
  ERR_MSG_NOT_STARTED,
  ERR_MSG_CLAIMED,
  ERR_MSG_UNKNOWN
} from '../constants';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = '/api/';

const { ethereum } = window;
if (!ethereum) {
  alert('Please install the MetaMask wallet extension on your browser');
}

let provider;
let signer;
let contract;

export const useBlockchainStore = defineStore({
  id: 'blockchain',
  state: () => ({
    isInitialized: false,
    isReady: false,
    isMinting: false,
    canMint: true,
    publicKey: '',
    numMintedCellar: 0,
    numMintedTable: 0,
    numMintedFrens: 0,
    isGoldlisted: false
  }),
  getters: {
    isWalletConnected: state => {
      return !!state.publicKey;
    }
  },
  actions: {
    async init() {
      provider = new ethers.providers.Web3Provider(ethereum, 'any');
      signer = provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDR, Contract.abi, signer);

      this.isInitialized = true;
      this.publicKey = await this.getAccountPubKey();
      if (this.publicKey) {
        await this.checkGoldlisted();
      }
      await this.fetchMintedPerTiers();

      this.isReady = true;
    },

    async checkGoldlisted() {
      try {
        const pkey = await signer.getAddress()
        const { data: { goldlisted } } = await axios.get(`list/${pkey}`);
        this.isGoldlisted = !!goldlisted;
        console.log(`Goldlisted: ${this.isGoldlisted}`);
      } catch (error) {
        alert('Please install the MetaMask wallet extension on your browser')
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
      } catch (error) {
        console.error(error);
      }
    },

    async fetchMintedPerTiers() {
      const [cellar, table, tableGold, frens] = await contract.mintedPerTiers();
      this.numMintedCellar = +cellar.toString();
      this.numMintedTable = +table.toString() + (+tableGold.toString());
      this.numMintedFrens = +frens.toString();
    },

    async fetchTotalMinted() {

    },

    async fetchAvailabilities() {

    },

    async mint(tierName) {
      if (this.isMinting) return;
      if (![TIER_CELLAR, TIER_TABLE, TIER_TABLE_GOLD].includes(tierName)) {
        throw new Error('Invalid tier name');
      }

      this.isMinting = true;

      console.log(`Attempting to mint tier "${tierName}"`);

      const prices = {
        [TIER_CELLAR]: PRICE_CELLAR,
        [TIER_TABLE]: PRICE_TABLE,
        [TIER_TABLE_GOLD]: PRICE_TABLE_GOLD
      };

      const tierIds = {
        [TIER_CELLAR]: TIER_CELLAR_ID,
        [TIER_TABLE]: TIER_TABLE_ID,
        [TIER_TABLE_GOLD]: TIER_TABLE_GOLD_ID,
        [TIER_FRENS]: TIER_FRENS_ID
      };

      const price = ethers.utils.parseUnits(prices[tierName].toString(), 'ether');
      const tierId = tierIds[tierName];

      try {
        let tx;
        if ([TIER_CELLAR, TIER_TABLE].includes(tierName)) {
          tx = await contract.mint(tierId, { value: price });
        }

        if (tierName === TIER_TABLE_GOLD) {
          const pkey = await signer.getAddress();
          const { data: { proof } } = await axios.get(`proof/${pkey}`);
          tx = await contract.mintGold(proof, { value: price });
        }

        const { transactionHash } = await tx.wait()
        console.log(transactionHash);

        await this.fetchMintedPerTiers();
      } catch (error) {
        const message = this.extractErrorMessage(error)
        alert(message);
      } finally {
        this.isMinting = false;
      }
    },

    async airdrop() {

    },

    async withdraw() {

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
        return ERR_MSG_CLAIMED;
      }
      if (message && message.toLowerCase().includes('not yet started')) {
        this.canMint = false;
        return ERR_MSG_NOT_STARTED;
      }
      return ERR_MSG_UNKNOWN;
    }
  }
});
