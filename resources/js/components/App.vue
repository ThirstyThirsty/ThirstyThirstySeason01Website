<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal company-name">Thirsty Thirsty</h5>
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

    <div class="content-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
      <h1 class="display-4">Minting Page</h1>
      <template v-if="isReady">
        <p class="lead" v-if="!isWalletConnected">
          Please connect your MetaMask to enable minting.
        </p>
        <main class="lead" v-else>
          <template v-if="isProcessingTx">
            <Loading />
            <p>Please wait while transaction is being processed...</p>
          </template>
          <template v-else-if="mintTx">
            <p>Congratulations! You've successfully minted your NFT!</p>
            <p>You can
              <a
                :href="getTransactionLink(mintTx.transactionHash)"
                target="_blank"
                noreferrer
                noopener
              >
                review the transaction on Etherscan
              </a>.
            </p>
          </template>
          <template v-else>
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
                @click.prevent="isGoldlisted ? mint(TIER_TABLE_GOLD) : mint(TIER_TABLE)"
              >
                <span v-if="isGoldlisted">Mint <strong>Table (Goldlist)</strong> Tier NFT</span>
                <span v-else>Mint <strong>Table</strong> Tier NFT</span>
              </a>
            </p>
          </template>
        </main>
      </template>
    </div>

    <div class="container">
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import * as ethers from 'ethers'
import Contract from '../../abi/ThirstyThirstySeason01.json'
import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = '/api/'

const TIER_CELLAR = 'cellar'
const TIER_TABLE = 'table'
const TIER_TABLE_GOLD = 'tableGold'
const TIER_FRENS = 'frens'

const ERR_MSG_FUND = 'You have insufficient fund to mint'
const ERR_MSG_MINT = "Seems like you've already minted the maximum number per wallet"
const ERR_MSG_CLAIMED = "Seems like you've already minted your goldlisted NFT... Try another Tier!"
const ERR_MSG_UNKNOWN = 'Oops! An unknown error occured. Please try again later...'

const getEnv = () => {
  const url = window.location.hostname
  if (url.includes('staging.herokuapp.com')) return 'staging'
  if (['thirstythirsty.herokuapp.com/' || 'thirstythirsty.xyz'].includes(url)) {
    return 'production'
  }
  return 'development'
}

const addr = {
  'development': {
    [TIER_CELLAR]: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    [TIER_TABLE]: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    [TIER_TABLE_GOLD]: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    [TIER_FRENS]: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
  },
  'staging': {
    [TIER_CELLAR]: '0x2011bDd9de56e3ad9b730948e4179df474eeE37E',
    [TIER_TABLE]: '0xc6C643944519350F2b13365C17210118E7087E2a',
    [TIER_TABLE_GOLD]: '0xcBcf0BdA4b151bf86912f6534f958901D130486b',
    [TIER_FRENS]: '0x4209948b3B1f0ce21E0dcCFaAcF4ABA3E2B913F6'
  },
  'production': {
    [TIER_CELLAR]: '',
    [TIER_TABLE]: '',
    [TIER_TABLE_GOLD]: '',
    [TIER_FRENS]: ''
  }
}

export default {
  name: 'App',

  components: { Loading },

  data() {
    return {
      signer: null,
      provider: null,
      isWalletConnected: false,
      isGoldlisted: false,
      isReady: false,
      isProcessingTx: false,
      mintTx: null,
      canMint: true,
      TIER_CELLAR,
      TIER_TABLE,
      TIER_TABLE_GOLD,
      TIER_FRENS,
      addresses: {
        [TIER_CELLAR]: addr[getEnv()][TIER_CELLAR].toLowerCase(),
        [TIER_TABLE]: addr[getEnv()][TIER_TABLE].toLowerCase(),
        [TIER_TABLE_GOLD]: addr[getEnv()][TIER_TABLE_GOLD].toLowerCase(),
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
    this.provider = new ethers.providers.Web3Provider(ethereum, 'any')
    this.signer = this.provider.getSigner()

    this.isWalletConnected = this.isWalletConnected || await this.checkMetaMaskConnected()

    this.contracts[TIER_CELLAR] = new ethers.Contract(this.addresses[TIER_CELLAR], Contract.abi, this.signer)
    this.contracts[TIER_TABLE] = new ethers.Contract(this.addresses[TIER_TABLE], Contract.abi, this.signer)
    this.contracts[TIER_TABLE_GOLD] = new ethers.Contract(this.addresses[TIER_TABLE_GOLD], Contract.abi, this.signer)

    await this.checkGoldlisted()
    this.isReady = true
  },

  methods: {
    async checkGoldlisted() {
      try {
        const pkey = await this.signer.getAddress()
        const { data: { goldlisted } } = await axios.get(`list/${pkey}`)
        this.isGoldlisted = goldlisted
      } catch (err) {
        // Metamask not connected
      }
      return false
    },

    async connectWallet() {
      if (this.isWalletConnected) return

      const { ethereum } = window
      if (!ethereum) {
        alert('Please install the MetaMask extension on your browser')
      }

      await this.provider.send('eth_requestAccounts', [])

      this.isWalletConnected = true

      await this.checkGoldlisted()
    },

    async mint(tierName) {
      console.log(`Attempting to mint tier "${tierName}"`)
      this.isProcessingTx = true

      const price = ethers.utils.parseUnits(this.prices[tierName].toString(), 'ether')

      try {
        let tx
        if ([TIER_CELLAR, TIER_TABLE].includes(tierName)) {
          tx = await this.contracts[tierName].mint({ value: price })
        }

        if (tierName === TIER_TABLE_GOLD) {
          const pkey = await this.provider.getSigner().getAddress()
          const { data: { proof } } = await axios.get(`proof/${pkey}`)
          tx = await this.contracts[tierName].mintGold(proof, { value: price })
        }

        this.mintTx = await tx.wait()
        console.log(this.mintTx)

        const mints = await this.contracts[tierName].numOfMints()
        alert(mints + ' mints on this specific contract (' + tierName + ')')
      } catch (err) {
        const message = this.extractErrorMessage(err)
        alert(message)
      } finally {
        this.isProcessingTx = false
      }
    },

    async checkMetaMaskConnected() {
      const accounts = await this.provider.listAccounts()
      return accounts.length > 0
    },

    extractErrorMessage(error) {
      const message = error.data ? error.data.message : error.toString()

      console.error(message)

      if (message && message.toLowerCase().includes('not enough fund')) {
        return ERR_MSG_FUND
      }
      if (message && message.toLowerCase().includes('no more mint for user')) {
        this.canMint = false
        return ERR_MSG_MINT
      }
      if (message && message.toLowerCase().includes('address has already claimed')) {
        this.isGoldlisted = false
        return ERR_MSG_CLAIMED
      }
      return ERR_MSG_UNKNOWN
    },

    getTransactionLink(txHash) {
      const env = getEnv()
      const source = {
        development: '',
        staging: 'https://rinkeby.etherscan.io/tx/',
        production: 'https://etherscan.io/tx/',
      }
      return source[env] + txHash
    }
  },

  computed: {
    walletButtonLabel() {
      return this.isWalletConnected ? 'Connected' : 'Connect wallet'
    }
  }
}
</script>
