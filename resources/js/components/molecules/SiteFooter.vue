<script setup>
defineProps({
  items: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <footer class="container px-5 py-20 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2  justify-center">
      <div class="flex flex-wrap">
        <div class="w-full p-1 md:p-2">
          <div class="flex">
            <a
              v-for="item in items"
              :key="item.name"
              :href="item.href"
              :target="item.target"
              :noopener="!!item.target == '_blank'"
              :noreferrer="!!item.target == '_blank'"
              class="grow p-3 flex items-center rounded-md cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
