<script setup>
import BannerTeam from '../molecules/BannerTeam';

const people = [
  {
    name: 'Alexis',
    role: 'Founder and Partnerships',
    imageUrl:
      '/images/SP_AlexisPhoto_2.jpg',
    bio: 'She is a child of Brazilian Indigenous, Portuguese and adopted Jewish ancestors. She founded Thirsty Thirsty in 2014, offering a natural wine focused wine club, events, and consulting. She has worked in the global food and wine industry since 2009, focusing on natural wine generative farming in thirteen countries. She holds a WSET Level 3 accreditation with Distinction.',
    twitterUrl: 'https://twitter.com/0xbruxa',
    twitterName: '@0xbruxa'
  },
  {
    name: 'Cryptowitch',
    role: 'Education and Operations',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1453687597377654791/IGipi_eq_400x400.jpg',
    bio: 'A crypto educator and founder of 0xx, focused on educating women and underserved communities about web3. Previously she worked for two decades in the wine and wellness worlds. She holds a M.A from New York University in Food Studies, focusing on the relationship between food & conflict.',
    twitterUrl: 'https://twitter.com/cryptowitch6',
    twitterName: '@cryptowitch6'
  },
  {
    name: 'Kim',
    role: 'Community Ops lead and Marketing',
    imageUrl:
      '/images/kim.jpg',
    bio: 'Community Ops lead and Marketing. Kim is an NFT operations and marketing manager. In the past, she has specialized in building partnerships and creating marketing campaigns for various direct-to-consumer brands. She’s bullish on the possibilities that web3 can offer, especially in terms of bringing financial freedom to underrepresented groups.',
    twitterUrl: 'https://twitter.com/chimmyken',
    twitterName: '@chimmyken'
  },
  {
    name: 'Trian',
    role: 'Artist Relations, Financials, Special Projects',
    imageUrl:
      '/images/trian.jpg',
    bio: 'Artist Relations, Financials, Special Projects. Trian is an NFT art creative and financials lead. She is committed to supporting women in web3. Her passion is bringing diverse voices to the NFT and web3 space authentically. It is her belief that the community driven ethos of web3 and NFT’s can have a positive impact on the world.',
    twitterUrl: 'https://twitter.com/trianlongsmitty',
    twitterName: '@trian.eth'
  },
  {
    name: 'Davy',
    role: 'Dev and Tech Strategy',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1508460189502128128/ML7QXfW0_400x400.jpg',
    bio: 'An independent consultant working as a strategist, designer and developer and tech lead for the web. An academically-trained designer turned technologist, he has worked extensively in the past 12 years for the luxury industry, art market, and institutions such as the OECD. He currently advises and leads tech for companies of different sizes and co-organized the first successful auction-house led NFT art sale in France, where he is based.',
    twitterUrl: 'https://twitter.com/davypeterbraun',
    twitterName: '@davypeterbraun'
  }
];
</script>

<template>
  <div class="bg-white" id="team">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl text-center font-extrabold tracking-tight sm:text-4xl">Team Info</h2>

        <ul role="list" class="pt-10 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <BannerTeam :person="person" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
