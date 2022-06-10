<script setup>
import { onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { FOOTER } from '../../constants';
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue';

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  SparklesIcon,
  GiftIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  FireIcon,
  GlobeIcon,
  ShieldCheckIcon,
  SupportIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/vue/outline';

import { ChevronDownIcon } from '@heroicons/vue/solid';

import Button from '../atoms/Button'

import { useBlockchainStore } from '../../stores/blockchain';
import { useScrollStore } from '../../stores/scroll';

const { scrollTo } = useScrollStore();
const { initBlockchain, connectWallet } = useBlockchainStore();
const { isWalletConnected, isReady } = storeToRefs(useBlockchainStore());
const route = useRoute();

const isFullNav = ref(true);

watch(
  () => route.name,
  () => {
    isFullNav.value = route.name.toLowerCase() !== 'terms'
  }
)

const menuItems = [
  {
    name: 'NFT Tier Breakdown',
    description: 'NFT Tier Breakdown',
    icon: ChartBarIcon,
    href:'#',
    to: 'tier'
  },
  {
    name: 'Our Partners',
    description: "Our Partners",
    icon: GlobeIcon,
    href:'#',
    to: 'partners'
  },
  {
    name: 'Offerings (Utility)',
    description: 'Offerings (Utility)',
    icon: SparklesIcon,
    href:'#',
    to: 'offerings'
  },
  {
    name: 'Artwork',
    description: 'Artwork',
    icon: SparklesIcon,
    href:'#',
    to: 'artwork'
  },
  {
    name: 'Roadmap',
    description: 'Roadmap',
    icon: FireIcon,
    href:'#',
    to: 'roadmap'
  },
  {
    name: 'Team Info',
    description: 'Team Info',
    icon: UserGroupIcon,
    href:'#',
    to: 'team'
  },
];

onMounted(async () => {
  await initBlockchain();
});

const attemptConnect = async () => {
  console.info('[INFO] Connecting wallet...');
  await connectWallet();
};
</script>

<template>
  <Popover class="fixed w-full z-10 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="justify-start lg:w-0 lg:flex-1 hidden lg:flex">
          <a href="/">
            <span class="sr-only">Thirsty Thirsty</span>
            <img class="h-10 w-auto sm:h-14" src="/images/ThirstyThirsty_Logo_Circle-C.png" alt="Thirsty Thirsty Circular Logo" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <a
            v-if="isFullNav"
            v-for="item in menuItems"
            @click.prevent="scrollTo(item.to)"
            href="#"
            :description="item.description"
            class="text-lg font-medium text-gray-700 hover:text-gray-900 font-serif"
          >
            {{ item.name }}
          </a>
          <a
            v-else
            href="/"
            class="text-lg font-medium text-gray-700 hover:text-gray-900 font-serif"
          >
            Back to mint site
          </a>
        </PopoverGroup>
        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <Button
            v-if="isReady"
            @click.prevent="attemptConnect"
            ghost
            small
            :disabled="isWalletConnected"
          >
            {{ isWalletConnected ? 'Connected' : 'Connect Wallet' }}
          </Button>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
        <div class="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div class="-mt-1 -ml-1">
                <img class="h-10 w-auto sm:h-14" src="/images/ThirstyThirsty_Logo_Circle-C.png" alt="Thirsty Thirsty Circular Logo" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-if="isFullNav"
                  v-for="item in menuItems"
                  :key="item.name"
                  @click="scrollTo(item.to)"
                  class="-m-3 p-3 flex cursor-pointer items-center rounded-md hover:bg-gray-50"
                >
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-purple-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
                <a
                  v-else
                  href="/"
                  class="text-lg font-medium text-gray-700 hover:text-gray-900 font-serif"
                >
                  Back to mint site
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                v-for="item in FOOTER"
                :key="item.name"
                :href="item.href"
                :target="item.target"
                :noopener="!!item.target == '_blank'"
                :noreferrer="!!item.target == '_blank'"
                class="-m-3 p-3 flex items-center rounded-md cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
