<script setup>
import BannerPartner from '../molecules/BannerPartner';
</script>

<template>
  <div class="bg-white" id="partners">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Partners</h2>
          <p class="text-xl text-gray-900">
            We are proud to build with an inspiring group of hospitality leaders, farmers, and land protectors for our launch. As we grow, more locations and experiences will open up to our Members.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            <BannerPartner>
              <template #name>Rajat Parr, Phelan Farm</template>
              <template #bio>
                The top tier of our Launching Membership NFT this June comes with a bottle of <span class="font-medium">collector Pinot Noir by
                <a href="https://phelanfarm.com/" target="_blank" class="underline underline-offset-1" noreferrer noopener>Rajat Parr of Phelan Farm</a></span> in Central Coast CA.
                Artist <a href="https://www.marleighculver.com/" target="_blank" class="underline underline-offset-1">Marleigh Culver</a> created a bespoke wine label that will serve as the digital NFT and the wine label art. Raj is one of the most famous and revered wine voices in the world who is now growing grapes regeneratively.
              </template>
            </BannerPartner>

            <BannerPartner>
              <template #name>Juanda</template>
              <template #bio>
                Our <a href="https://www.instagram.com/juandamazonas/?hl=en" target="_blank" class="underline underline-offset-1" noreferrer noopener>Indigenous Partner is Juanda</a>, a young Indigenous activist in unceded Colombian Amazonas. He and his community are building a restaurant and community center to host Thirsty Thirsty members and celebrate their culture.
              </template>
            </BannerPartner>

            <BannerPartner>
              <template #name>Assembly / Comedor</template>
              <template #bio>
                <a href="https://assembly.co/" target="_blank" class="underline underline-offset-1" noreferrer noopener>Assembly Hospitality</a> is a prominent force in the Austin hospitality scene known for their restaurant Comedor and their cocktail bar, Garage. They are known for their relationships with local, small-scale growers around Texas and bringing it all together in world-class architectural environments.
              </template>
            </BannerPartner>

            <BannerPartner>
              <template #name>Édiciones</template>
              <template #bio>
                <a href="https://www.ediciones.nyc/" target="_blank" class="underline underline-offset-1" noreferrer noopener>Édiciones</a> is a queer food studio based in NYC recognized for food sovereignty work in Brooklyn throughout the pandemic, and for throwing incredible food parties.
              </template>
            </BannerPartner>

            <BannerPartner>
              <template #name>Id Est Hospitality</template>
              <template #bio>
                <a href="https://iehospitality.com/" target="_blank" class="underline underline-offset-1" noreferrer noopener>Id Est Hospitality</a> is the restaurant group in Denver and Boulder, Colorado. They have four critically acclaimed restaurants and a mill focused on ancestral grains. They are already involved in Blue Carbon sequestration efforts, and support a major network of small farmers across Colorado. They are also a zero-waste food program also known for fermentation.
              </template>
            </BannerPartner>

            <BannerPartner>
              <template #name>Two Eighty Project</template>
              <template #bio>
                <a href="https://www.280project.com/" target="_blank" class="underline underline-offset-1" noreferrer noopener>Two Eighty Project</a> is a San Francisco Bay Area winery that has become a critical voice for Black representation in the industry. Chris and Jannea are dedicated to creating food sovereignty for Black communities in the city and farming scholarships with other well known wineries. The two have extensive sommelier and fine dining backgrounds, rounding out their deep passion for wine and access.
              </template>
            </BannerPartner>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

