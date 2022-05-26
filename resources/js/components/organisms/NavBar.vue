<script setup>
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

const menuItems = [
  {
    name: 'NFT Tier Breakdown',
    href: '/#tier-breakdown',
    description: 'NFT Tier Breakdown',
    icon: ChartBarIcon,
  },
  {
    name: 'NFT Artwork',
    href: '#',
    description: 'NFT Artwork',
    icon: SparklesIcon,
  },
  {
    name: 'Our Partners',
    href: '#',
    description: "Our Partners",
    icon: GlobeIcon,
  },
  {
    name: 'Roadmap',
    href: '#',
    description: 'Roadmap',
    icon: FireIcon,
  },
  {
    name: 'Team Info',
    href: '#',
    description: 'Team Info',
    icon: UserGroupIcon,
  },
];
const footerItem = [
  {
    name: 'Discord',
    description: 'Discord',
    href: '#'
  },
  {
    name: 'Twitter',
    description: 'Twitter',
    href: '#'
  },
  {
    name: 'Instagram',
    description: 'Instagram',
    href: '#'
  },
  {
    name: 'Website',
    description: 'Website',
    href: '#'
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];
</script>

<template>
  <Popover class="fixed w-full z-10 bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
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
            v-for="item in menuItems"
            :href="item.href"
            :description="item.description"
            class="text-lg font-medium text-gray-700 hover:text-gray-900 font-serif"
          >
            {{ item.name }}
          </a>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"> Connect Wallet </a>
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
                <a v-for="item in menuItems" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-purple-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a v-for="item in footerItem" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
