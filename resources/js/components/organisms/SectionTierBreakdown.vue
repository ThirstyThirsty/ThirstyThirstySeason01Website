<script setup>
import BannerTier from '../molecules/BannerTier';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useBlockchainStore } from '../../stores/blockchain';

import {
  PRICE_CELLAR,
  PRICE_TABLE,
  PRICE_TABLE_GOLD,
  TIER_TABLE,
  TIER_CELLAR,
  MAX_CELLAR,
  MAX_TABLE
} from '../../constants';

const {
  isGoldlisted,
  numMintedCellar,
  numMintedTable
} = storeToRefs(useBlockchainStore());

const tier1 = [
  '1 bottle of Collector Pinot Noir <strong>EXCLUSIVE</strong> to Thirsty Thirsty, <a href="https://phelanfarm.com/" target="_blank" noreferrer noopener>made by Phelan Farm (Rajat Parr)</a> + NFT art by <a href="https://www.marleighculver.com/" target="_blank" noreferrer noopener>Marleigh Culver</a> as the wine label',
  'Fine art NFT by <a href="https://www.marleighculver.com/" target="_blank" nopener noreferrer>Marleigh Culver</a>',
  'Launch Party access to our NFT NYC lunch',
  'VIP dining access at top restaurants',
  'VIP Winery access',
  'VIP Private Chef access',
  'Digital workshops and healings',
  'First access to TT travel experiences (ex: <em>Harvest Experience, Ceremony in Amazonas</em>)',
  'Future TT event access/member benefits for NFT holders',
];

const tier2 = [
  'Fine art NFT by <a href="https://www.marleighculver.com/" target="_blank" nopener noreferrer>Marleigh Culver</a>',
  'Launch Party access to our NFT NYC lunch',
  'VIP dining access at top restaurants',
  'VIP Winery access',
  'VIP Private Chef access',
  'Digital workshops and healings',
  'First access to TT travel experiences (ex: <em>Harvest Experience, Ceremony in Amazonas</em>)',
  'Future TT event access/member benefits for NFT holders',
];

const { isMinting, canMint } = storeToRefs(useBlockchainStore());
const { mint } = useBlockchainStore();
</script>

<template>
  <div class="bg-gray-100" id="tier">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">NFT Tier Breakdown</h2>
          <p class="m-auto mt-4 text-xl text-gray-900 w-3/4">
            Thirsty Thirsty members enjoy unique dining experiences featuring the best restaurants that are committed to Ancestral Agricultural wisdom. Members luxuriate in these experiences while building relationships with the inspiring people behind their food, and connecting with our planet’s deep knowledge. Thirsty Thirsty NFT holders become XPs (Extraordinary Patrons) within our food and beverage network. Our NFT is a membership passport that unlocks epic dining experiences and access to collector fine wines.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-0">
      <div class="relative">
        <div class="absolute inset-0 h-4/5 tt-bg-redish" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BannerTier
            @mint="mint"
            :tier-name="TIER_CELLAR"
            :benefits="tier1"
            :loading="isMinting"
            :disabled="isMinting || !canMint"
            terms="/terms"
            class="mb-4"
          >
            <template #title>Tier 1 - "Cellar"</template>
            <template #extra>
              <p class="text-sm">A maximum of six Tier 1 NFTs may be minted per person.</p>
            </template>
            <template #availability>{{ MAX_CELLAR - numMintedCellar }}</template>
            <template #price>{{ PRICE_CELLAR }}</template>
          </BannerTier>

          <BannerTier
            @mint="mint"
            :tier-name="TIER_TABLE"
            :benefits="tier2"
            :goldlisted="isGoldlisted"
            :loading="isMinting"
            :disabled="isMinting || !canMint"
          >
            <template #title>Tier 2 - "Table"</template>
            <template #availability>{{ MAX_TABLE - numMintedTable }}</template>
            <template #price>{{ isGoldlisted ? PRICE_TABLE_GOLD : PRICE_TABLE }}</template>
          </BannerTier>

          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full"
                    src="/images/3042B731-4B9D-4BC0-B61F-6566702A1C69_1_105_c.jpeg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
