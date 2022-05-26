<script setup>
const { person } = defineProps({
  person: {
    type: Object,
    default: () => ({
      imageUrl: '',
      role: '',
      name: '',
      twitterUrl: '',
      twitterName: ''
    })
  }
});
</script>

<template>
  <div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:gap-8">
    <div class="h-0 aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4">
      <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" :src="person.imageUrl" />
    </div>
    <div>
      <div class="space-y-4">
        <div class="text-lg leading-6 font-medium space-y-1">
          <h3>{{ person.name }}</h3>
          <p class="text-purple-600">{{ person.role }}</p>
        </div>
        <div class="text-lg">
          <p class="text-gray-900">{{ person.bio }}</p>
        </div>
      </div>
      <div class="mt-5">
        <a :href="person.twitterUrl" class="text-gray-900 hover:text-gray-900 cursor-pointer flex">
          <span class="sr-only">Twitter</span>
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          <span class="ml-2 font-medium">{{ person.twitterName }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
