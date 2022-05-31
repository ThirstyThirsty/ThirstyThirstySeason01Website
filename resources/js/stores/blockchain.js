import { defineStore } from 'pinia';
import * as ethers from 'ethers';
import axios from 'axios';
import { CONTRACT_ADDR } from '../constants';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = '/api/';

const { ethereum } = window;
if (!ethereum) {
  alert('Please install the MetaMask wallet extension on your browser');
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

      this.isInitialized = true;
      this.publicKey = await this.getAccountPubKey();
      if (this.publicKey) {
        await this.checkGoldlisted();
      }
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
