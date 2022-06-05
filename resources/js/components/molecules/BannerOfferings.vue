<script setup>
import { KeyIcon } from '@heroicons/vue/solid';

defineProps({
  examples: {
    type: Array,
    default: []
  },
  offering: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="max-w-lg mx-auto shadow-lg overflow-hidden lg:max-w-none lg:flex mb-4 ">
    <div class="flex-1 bg-white px-6 py-8 lg:p-12">
      <h3 class="text-2xl font-extrabold sm:text-3xl">
        <span class="text-gray-900">
          <slot name="name" />
        </span>
        <span class="ml-10 text-gray-400">
          (<slot name="location" />)
        </span>
      </h3>
      <p class="text-xl">
        Offering: <span v-html="offering" />
      </p>
      <div v-if="examples.length" class="mt-8">
        <ul role="list" class="mt-8 space-y-5">
          <li v-for="example in examples" :key="example" class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
              <KeyIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <p class="ml-3 text-base text-gray-700" v-html="example" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
