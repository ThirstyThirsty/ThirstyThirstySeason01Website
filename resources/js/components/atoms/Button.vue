<script setup>
import { useAttrs, computed } from 'vue'

const attrsNames = Object.keys(useAttrs())

const style = computed(() => {
  let css = 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed ';

  if (attrsNames.includes('primary')) {
    css += 'text-white bg-purple-600 hover:bg-purple-700 ';
  } else if (attrsNames.includes('ghost')) {
    css += 'text-gray-900 border border-gray-600 ';
  } else {
    css += 'text-white bg-gray-800 hover:bg-gray-900 px-5 py-3 border border-transparent ';
  }

  if (attrsNames.includes('small')) {
    css += 'px-5 py-3 ';
  } else {
    css += 'md:py-4 md:text-lg md:px-20 ';
  }

  return css;
});
</script>

<template>
  <div class="rounded-md shadow">
    <button v-bind="$attrs" :class="style">
      <slot />
    </button>
  </div>
</template>
