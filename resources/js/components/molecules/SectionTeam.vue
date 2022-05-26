<script setup>
import BannerTeam from './BannerTeam';

const people = [
  {
    name: 'Bruxa',
    role: 'Founder and Partnerships',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1502702394563604480/6lW47Jth_400x400.jpg',
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
      'https://pbs.twimg.com/profile_images/1491188957429829640/WtSl34Gr_400x400.jpg',
    bio: 'Kim has a background in marketing and project management. In the past, she has specialized in building partnerships and creating marketing campaigns for various direct-to-consumer brands like Grove Collaborative, Quip and Verb Energy. She’s bullish on the possibilities that Web3 can offer, especially in terms of bringing financial freedom to traditionally underrepresented groups. In 2021, she completed SheFi’s 10-week crypto course which helped shape her understanding of how Web3 technology and tools can help elevate various industries. At Thirsty Thirsty, she leads our marketing and community operations efforts. She’s eager and excited about Thirsty Thirsty’s mission to recenter Ancestral wisdom through joyful wine and food experiences powered by the blockchain.',
    twitterUrl: 'https://twitter.com/chimmyken',
    twitterName: '@chimmyken'
  },
  {
    name: 'Trian',
    role: 'Artist Relations, Financials, Special Projects',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1490861342424809483/_JT8PJbK_400x400.jpg',
    bio: 'Trian began in web3 as an NFT collector and curator and quickly decided to develop a career in web3. Focused on woman lead projects. She joined the Thirsty Thirsty team after securing a scholarship to Eth Denver through Blue DAO. In addition to working with Thirsty Thirsty, she is a NFT art and music curator. While developing her own community driven project.',
    twitterUrl: 'https://twitter.com/trianlongsmitty',
    twitterName: '@trian.eth'
  },
  {
    name: 'Davy',
    role: 'Dev and Tech Strategy',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1508460189502128128/ML7QXfW0_400x400.jpg',
    bio: 'An independent consultant working as a strategist, sometimes UX designer, oftentimes developer and tech lead for the web — and as of late, web3. An academically-trained designer turned technologist, he has worked extensively in the past 12 years for the luxury industry, art market, and institutions such as the OECD. He currently advises and leads tech for companies of different sizes and co-organized the first successful auction-house led NFT art sale in France, where he is based.',
    twitterUrl: 'https://twitter.com/davypeterbraun',
    twitterName: '@davypeterbraun'
  }
];
</script>

<template>
  <div class="bg-white">
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
