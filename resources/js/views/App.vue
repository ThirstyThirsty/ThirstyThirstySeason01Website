<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal company-name">Thirsty Thirsty</h5>
      <!-- <nav class="my-3 my-md-0 mr-lg-3">
        <a class="p-2 text-dark" href="#">Link 1</a>
      </nav> -->
      <a
        class="btn btn-outline-primary"
        :class="{ disabled: isWalletConnected }"
        :disabled="isWalletConnected"
        href="#"
        @click.prevent="connectWallet"
      >
        {{ walletButtonLabel }}
      </a>
    </div>

    <div class="content-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <template v-if="!isWalletConnected">
        <h1 class="display-4">Minting Page</h1>
        <p class="lead">Please connect your MetaMask to show enable minting.</p>
      </template>
      <template v-else>
        <h1 class="display-4">Minting Page</h1>
        <main class="lead">
          <p>
            <a
              class="btn btn-primary"
              href="#"
              :class="{ disabled: !canMint }"
              :disabled="!canMint"
              @click.prevent="mint('cellar')"
            >
              Mint <strong>Cellar</strong> Tier NFT
            </a>
          </p>
          <p>
            <a
              class="btn btn-primary"
              href="#"
              :class="{ disabled: !canMint }"
              :disabled="!canMint"
              @click.prevent="mint('table')"
            >
              Mint <strong>Table</strong> Tier NFT
            </a>
          </p>
        </main>
      </template>
    </div>

    <div class="container">
    </div>
  </div>
</template>

<script>
import * as ethers from 'ethers';
import Contract from '../../abi/ThirstyThirstySeason01.json'

const TIER_CELLAR = 'cellar';
const TIER_TABLE = 'table';
const TIER_TABLE_GOLD = 'tableGold';

const ERR_MSG_FUND = 'You have insufficient fund to mint';
const ERR_MSG_MINT = "Seems like you've already minted the maximum number per wallet";
const ERR_MSG_UNKNOWN = 'Oops! An unknown error occured. Please try again later...';

export default {
  name: 'App',

  data() {
    return {
      provider: null,
      isWalletConnected: false,
      canMint: true,
      addresses: {
        [TIER_CELLAR]: '0x5FbDB2315678afecb367f032d93F642f64180aa3'.toLowerCase(),
        [TIER_TABLE]: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'.toLowerCase(),
        [TIER_TABLE_GOLD]: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'.toLowerCase(),
      },
      contracts: {
        [TIER_CELLAR]: null,
        [TIER_TABLE]: null,
        [TIER_TABLE_GOLD]: null
      },
      prices: {
        [TIER_CELLAR]: 0.3,
        [TIER_TABLE]: 0.17,
        [TIER_TABLE_GOLD]: 0.07
      }
    }
  },

  async mounted() {
    this.provider = new ethers.providers.Web3Provider(ethereum, 'any');
    const signer = this.provider.getSigner();
    this.isWalletConnected = this.isWalletConnected || await this.checkMetaMaskConnected();
    this.contracts[TIER_CELLAR] = new ethers.Contract(this.addresses[TIER_CELLAR], Contract.abi, signer);
    this.contracts[TIER_TABLE] = new ethers.Contract(this.addresses[TIER_TABLE], Contract.abi, signer);
    this.contracts[TIER_TABLE_GOLD] = new ethers.Contract(this.addresses[TIER_TABLE_GOLD], Contract.abi, signer);
  },

  methods: {
    async connectWallet() {
      if (this.isWalletConnected) return;

      const { ethereum } = window;
      if (!ethereum) {
        alert('Please install the MetaMask extension on your browser');
      }

      await this.provider.send('eth_requestAccounts', []);

      this.isWalletConnected = true;
    },

    async mint(tierName) {
      console.log(`Attempting to mint tier "${tierName}"`);

      const price = ethers.utils.parseUnits(this.prices[tierName].toString(), 'ether');

      try {
        let tx;
        if ([TIER_CELLAR, TIER_TABLE].includes(tierName)) {
          tx = await this.contracts[tierName].mint({ value: price });
        }
        await tx.wait();

        console.log((await this.contracts[tierName].numOfMints()).toString());
      // if (tierName === TIER_TABLE_GOLD) {
      //   tx = await this.container[tierName].mintGold(merkleHexProof, { value: price })
      // }
      } catch (err) {
        const message = this.extractErrorMessage(err);
        alert(message);
      }
    },

    async checkMetaMaskConnected() {
      const accounts = await this.provider.listAccounts();
      return accounts.length > 0;
    },

    extractErrorMessage(error) {
      const { data: { message } } = error;
      if (message && message.toLowerCase().includes('not enough fund')) {
        return ERR_MSG_FUND
      };
      if (message && message.toLowerCase().includes('no more mint for user')) {
        this.canMint = false;
        return ERR_MSG_MINT;
      }
      return ERR_MSG_UNKNOWN;
    }
  },

  computed: {
    walletButtonLabel() {
      return this.isWalletConnected ? 'Connected' : 'Connect wallet';
    }
  }
}
</script>
