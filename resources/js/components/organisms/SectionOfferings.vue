<script setup>
import BannerOfferings from '../molecules/BannerOfferings';

const venues = [
  {
    name: 'Assembly Hospitality',
    location: 'Austin, TX',
    offering: 'Bespoke VIP experiences that vary visit by visit at <a class="underline underline-offset-1" href="https://comedortx.com/" target="_blank" noopener noreferrer>Comedor</a> and <a class="underline underline-offset-1" href="https://garagetx.com/" target="_blank" noopener noreferrer>Garage</a>.',
    examples: ['ex: Off menu dishes & beverage pairings, meet Chef Philip Speer', 'Cooking classes, farm tours, unlock the more you visit']
  },
  {
    name: 'Édiciones',
    location: 'New York, NY',
    offering: 'Producing our NFT NYC Launch Lunch, Private Chef access for TT members.',
    examples: []
  },
  {
    name: 'Id Est Hospitality',
    location: 'Denver & Boulder, CO',
    offering: 'Bespoke VIP experiences that vary visit by visit at <a class="underline underline-offset-1" href="https://www.thewolfstailor.com/" target="_blank" noopener noreferrer>The Wolf’s Tailor</a>, <a class="underline underline-offset-1" href="https://www.brutodenver.com/" target="_blank" noopener noreferrer>Bruto</a>, <a class="underline underline-offset-1" href="https://www.bastaboulder.com/" target="_blank" noopener noreferrer>Basta</a>, and <a class="underline underline-offset-1" href="https://drystorageco.com/" target="_blank" noopener noreferrer>Dry Storage</a>',
    examples: ['ex: Off menu dishes and beverage pairings, meet the Head Chef', 'Fermentation classes, cellar tours, cooking classes, unlock the more you visit']
  },
  {
    name: 'Rajat Parr of Phelan Farm',
    location: 'Central Coast, CA',
    offering: 'Collector Pinot Noir for our 1st NFT, Winery visits at Phelan Farm, learn and work in the vines.',
    examples: []
  },
  {
    name: 'Two Eighty Project',
    location: 'San Francisco, CA',
    offering: 'Filoli Manor Vineyard visits, SF food & wine tour with Chris (founder).',
    examples: ['Visit and learn about Two Eighty Project’s rare hybrid vineyards at the iconic, 650 acre estate']
  },
  {
    name: 'Yanawi (Juanda)',
    location: 'Jungle, Amazonas',
    offering: 'Digital workshops with Amazonas Elders, Ceremonial experiences in Amazonas, Indigenous food-ways experiences.',
    examples: []
  },
];
</script>

<template>
  <div class="bg-gray-100" id="tier">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">NFT Offerings (Utility)</h2>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-0">
      <div class="relative">
        <div class="absolute inset-0 h-full tt-bg-green" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <BannerOfferings
            v-for="venue in venues"
            :key="venue.name"
            :offering="venue.offering"
            :examples="venue.examples"
          >
            <template #name>{{ venue.name }}</template>
            <template #location>{{ venue.location }}</template>
          </BannerOfferings>
        </div>
      </div>
    </div>
  </div>
</template>
