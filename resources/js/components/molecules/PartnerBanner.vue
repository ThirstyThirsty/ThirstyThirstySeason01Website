<template>
  <div class="space-y-4">
    <div class="text-lg leading-6 font-medium space-y-1">
      <h3><slot name="name" /></h3>
    </div>
    <div class="text-lg">
      <p class="text-gray-500"><slot name="bio" /></p>
    </div>
  </div>
</template>
