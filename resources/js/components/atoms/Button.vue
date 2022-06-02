<script setup>
import { useAttrs, computed, toRef } from 'vue';

const props = defineProps({
  gold: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const attrsNames = Object.keys(useAttrs());

const style = computed(() => {
  let css = 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md cursor-pointer disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed ';

  if (attrsNames.includes('primary')) {
    css += 'text-white bg-purple-600 hover:bg-purple-700 ';
  } else if (attrsNames.includes('ghost')) {
    css += 'text-gray-900 border border-gray-600 ';
  } else {
    css += 'text-white bg-gray-800 hover:bg-gray-900 px-5 py-3 border border-transparent disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed ';
  }

  if (props.gold) {
    css += 'text-white bg-yellow-600 hover:bg-yellow-700 disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed ';
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
      <template v-if="loading">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </template>
      <slot v-else />
    </button>
  </div>
</template>
