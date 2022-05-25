<script setup>
import TierBanner from './TierBanner'

const tier1 = [
  'Bottle of exclusive to Thirsty Thirsty from our partners at Phalen Farms (link)',
  'Launch Party access in NYC with partner Ediciones (link)',
  'Digital Session with Raj from Phalen Farms',
  'Digital Session with Black/Indigenous Partner',
  'Digital Session with XYZ - NEED',
  'DAO Partner Benefit ONE - NEED',
  'DAO Partner Benefit TWO - NEED',
  'DAO Partner Benefit THREE - NEED',
  'Future TT event access/member benefits for NFT holders',
];

const tier2 = [
  'Launch Party access in NYC with partner Ediciones (link)',
  'Digital Session with Black/Indigenous Partner',
  'Digital Session with XYZ',
  'DAO Partner Benefit ONE',
  'DAO Partner Benefit TWO',
  'DAO Partner Benefit THREE',
  'Future TT event access/member benefits for NFT holders',
];
</script>

<template>
  <div class="bg-gray-100" id="#tier-breakdown">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">NFT Tier Breakdown</h2>
          <p class="m-auto mt-4 text-xl text-gray-600 w-3/4">
            Thirsty Thirsty DAO members will enjoy unique dining experiences featuring the best restaurants that are committed to sourcing the best products. The best products are grown by small-scale growers and winemakers who work pulling from Ancestral farming techniques to strengthen their land’s biodiversity. Thirsty Thirsty NFT holders become VIPs within our food and beverage network. Our NFT acts as a membership passport unlocking epic dining experiences and access to collector fine wines.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-0">
      <div class="relative">
        <div class="absolute inset-0 h-4/5 bg-gray-100" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TierBanner :benefits="tier1" terms="/terms" class="mb-4">
            <template #title>Tier 1 - "Cellar"</template>
            <template #availability>270</template>
            <template #price>0.4</template>
          </TierBanner>

          <TierBanner :benefits="tier2">
            <template #title>Tier 2 - "Table"</template>
            <template #availability>518</template>
            <template #price>0.2</template>
          </TierBanner>
        </div>
      </div>
    </div>
  </div>
</template>
