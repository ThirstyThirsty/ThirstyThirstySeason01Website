<script setup>
import BannerTier from './BannerTier';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useBlockchainStore } from '../../stores/blockchain';

import {
  PRICE_CELLAR,
  PRICE_TABLE,
  PRICE_TABLE_GOLD
} from '../../constants';

const { isGoldlisted } = storeToRefs(useBlockchainStore());

const tier1 = [
  '1 bottle of Collector Pinot Noir exclusive to Thirsty Thirsty, made by Phalen Farm (Rajat Parr) with wine label art by Marleigh Culver',
  'Launch Party access to our NFT NYC lunch, with partner Édiciones',
  'VIP dining access with Assembly Hospitality and Id Est Hospitality',
  'VIP Winery access at Phelan Farm and Two Eighty Project vineyards',
  'VIP Private Chef access with Édiciones',
  'First access to TT travel experiences: <em>Harvest Experience, Ceremony in Amazonas...</em>',
  'Future TT event access/member benefits for NFT holders',
  'More to unlock with each future Cohort'
];

const tier2 = [
  'Fine art NFT by Marleigh Culver',
  'Launch Party access to NFT NYC lunch with partner Édiciones',
  'VIP dining access at Assembly Hospitality  and Id Est Hospitality restaurants',
  'VIP Winery access at Phelan Farm and Two Eighty Project vineyards',
  'First access to TT travel experiences: <em>Harvest Experience, Ceremony in Amazonas...</em>',
  'Future TT event access/member benefits for NFT holders',
  'More nodes to unlock with each future Cohort'
];

const priceTable = computed(() => {
  return isGoldlisted ? PRICE_TABLE_GOLD : PRICE_TABLE
});
</script>

<template>
  <div class="bg-gray-100" id="#tier-breakdown">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">NFT Tier Breakdown</h2>
          <p class="m-auto mt-4 text-xl text-gray-900 w-3/4">
            Thirsty Thirsty DAO members will enjoy unique dining experiences featuring the best restaurants that are committed to sourcing the best products. The best products are grown by small-scale growers and winemakers who work pulling from Ancestral farming techniques to strengthen their land’s biodiversity. Thirsty Thirsty NFT holders become VIPs within our food and beverage network. Our NFT acts as a membership passport unlocking epic dining experiences and access to collector fine wines.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-0">
      <div class="relative">
        <div class="absolute inset-0 h-4/5 tt-bg-redish" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BannerTier :benefits="tier1" terms="/terms" class="mb-4">
            <template #title>Tier 1 - "Cellar"</template>
            <template #availability>270</template>
            <template #price>{{ PRICE_CELLAR }}</template>
          </BannerTier>

          <BannerTier :benefits="tier2" :goldlisted="isGoldlisted">
            <template #title>Tier 2 - "Table"</template>
            <template #availability>518</template>
            <template #price>{{ priceTable }}</template>
          </BannerTier>
        </div>
      </div>
    </div>
  </div>
</template>
