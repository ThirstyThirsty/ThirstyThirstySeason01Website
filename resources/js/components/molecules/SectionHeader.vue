<script setup>
import Button from '../atoms/Button';
</script>

<template>
  <section class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <img class="h-15 w-auto sm:h-30" src="/images/ThirstyThirsty_Logo_Stack.png" alt="" />
        </h1>
        <p class="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
          Celebrating ancestral agriculture through food, wine, & earth adventures. Let’s regenerate Mother Earth deliciously, together.
        </p>
        <div class="mt-10 sm:flex sm:justify-center">
          <Button href="#" primary>Mint Membership NFT</Button>
        </div>
      </div>
    </div>
    <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 w-full h-full object-cover" src="/images/4F33D5A3-EC29-4CF2-A2D8-8DFF05C347C2_1_201_a.jpg" alt="" />
    </div>
  </section>
</template>
