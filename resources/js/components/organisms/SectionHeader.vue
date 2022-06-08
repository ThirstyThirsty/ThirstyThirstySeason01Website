<script setup>
import Button from '../atoms/Button';
import { useScrollStore } from '../../stores/scroll';

const { scrollTo } = useScrollStore();
</script>

<template>
  <section class="lg:relative" id="header">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <img class="h-15 w-auto sm:h-30" src="/images/ThirstyThirsty_Logo_Stack.png" alt="" />
        </h1>
        <p class="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
          An ancestral remembrance project disguised as the coolest food and wine club on Earth. Regenerate Mother Earth deliciously. 888 Membership NFTs.
        </p>
        <div class="mt-10 sm:flex sm:justify-center">
          <Button
            primary
            @click="scrollTo('tier')"
          >
            Mint Membership NFT (from June 10)
          </Button>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src="/images/20210919_TT_HARVEST_156.jpeg" alt="" />
    </div>
  </section>
</template>
