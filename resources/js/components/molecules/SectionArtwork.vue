<script setup>
const images = [
  {
    id: 1,
    imageSrc: '/images/IMG_0537.png',
    imageAlt: "",
  },
  {
    id: 2,
    imageSrc: '/images/IMG_0540.png',
    imageAlt: "",
  },
  {
    id: 3,
    imageSrc: '/images/IMG_0544.png',
    imageAlt: "",
  },
];
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Artwork</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-3 lg:gap-x-4">
        <div v-for="image in images" :key="image.id" class="group relative">
          <div class="w-full h-96 rounded-lg overflow-hidden sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
            <img :src="image.imageSrc" :alt="image.imageAlt" class="w-full h-full object-center object-cover" />
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1">
        <ul role="list">
          <li>
            <div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0 lg:gap-4">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" src="/images/000304610027100x768-1581354443215.jpeg" alt="" />
              </div>
              <div class="sm:col-span-1">
                <div class="space-y-4 pt-5 pl-10 pr-10">
                  <div class="text-2xl font-medium space-y-1">
                    <h2>Marleigh Culver</h2>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">
                      Marleigh Culver is a painter originally from Virginia, now based in Los Angeles, CA. Her work encompasses both paint and new media and is characterized by an abstract and romantic aesthetic, often focused on plants as subject matter. The use of color throughout her work is both considered and playful, reflecting the artist’s own effervescent personality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
