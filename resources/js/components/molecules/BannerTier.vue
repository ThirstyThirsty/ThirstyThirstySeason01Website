<script setup>
import { computed } from 'vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';
import Button from '../atoms/Button';
import {
  TIER_TABLE,
  TIER_CELLAR,
  TIER_TABLE_GOLD
} from '../../constants'

const props = defineProps({
  tierName: {
    type: String,
    required: true
  },
  benefits: {
    type: Array,
    default: []
  },
  terms: {
    type: String,
    default: ''
  },
  goldlisted: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const tier = computed(() => {
  if (props.tierName === TIER_CELLAR) return props.tierName;
  if (props.tierName === TIER_TABLE) {
    return props.goldlisted ? TIER_TABLE_GOLD : TIER_TABLE;
  }
  return '';
});
</script>

<template>
  <div class="max-w-lg mx-auto shadow-lg overflow-hidden lg:max-w-none lg:flex">
    <div class="flex-1 bg-white px-6 py-8 lg:p-12">
      <h3 class="text-2xl font-extrabold sm:text-3xl">
        <span class="text-gray-900"><slot name="title" /></span>
        <span class="ml-10 text-gray-400">
          <slot name="availability" /> available
        </span>
        <slot name="extra" />
      </h3>
      <div class="mt-8">
        <div class="flex items-center">
          <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-purple-600">Utility</h4>
          <div class="flex-1 border-t-2 border-gray-200" />
        </div>
        <ul role="list" class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
          <li v-for="feature in benefits" :key="feature" class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
              <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <p class="ml-3 text-sm text-gray-700" v-html="feature" />
          </li>
        </ul>
      </div>
    </div>
    <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
      <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
        <span>
          <slot name="price" />
        </span>
        <span class="ml-3 text-xl font-medium text-gray-500"> ETH </span>
      </div>
      <p v-if="terms" class="mt-4 text-sm">
        <a :href="terms" class="font-medium text-gray-500 underline"> Learn about our Terms and Conditions </a>
      </p>
      <div class="mt-6">
        <Button
          @click.stop="$emit('mint', tier)"
          :gold="goldlisted"
          :loading="loading"
          :disabled="disabled"
          small
        >
          Mint
        </Button>
      </div>
    </div>
  </div>
</template>
