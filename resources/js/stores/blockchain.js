import { defineStore } from 'pinia';
import * as ethers from 'ethers';

const MAX_CELLAR = 270;
const MAX_TABLE = 618;
const MAX_FRENS = 50;

const CONTRACT_ADDR = '';

const { ethereum } = window;
if (!ethereum) {
  alert('Please install the MetaMask wallet extension on your browser')
}

let provider;
let signer;

export const useBlockchainStore = defineStore({
  id: 'blockchain',
  state: () => ({
    isInitialized: false,
    isReady: false,
    publicKey: '',
    numMintedCellar: 0,
    numMintedTable: 0,
    numMintedFrens: 0
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

      this.isInitialized = true;
      this.publicKey = await this.getAccountPubKey();
      this.isReady = true;
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

    },

    async fetchTotalMinted() {

    },

    async fetchAvailabilities() {

    },

    async mint() {

    },

    async mintGold() {

    },

    async airdrop() {

    },

    async withdraw() {

    }
  }
});
