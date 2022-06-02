<script setup>
const props = defineProps({
  emoji: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="text-xl mx-auto flex items-center justify-center h-12 w-12 rounded-full" :class="color">
    {{ emoji }}
  </div>
</template>
