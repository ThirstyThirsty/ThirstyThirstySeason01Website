<script setup>
const props = defineProps({
  emoji: String,
  default: ''
});
</script>

<template>
  <div class="text-xl mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
    {{ emoji }}
  </div>
</template>
