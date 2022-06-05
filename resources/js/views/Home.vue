<script setup>
import SectionHeader from '../components/organisms/SectionHeader';
import SectionTierBreakdown from '../components/organisms/SectionTierBreakdown';
import SectionArtwork from '../components/organisms/SectionArtwork';
import SectionPartners from '../components/organisms/SectionPartners';
import SectionOfferings from '../components/organisms/SectionOfferings';
import SectionRoadmap from '../components/organisms/SectionRoadmap';
import SectionTeam from '../components/organisms/SectionTeam';
import SiteFooter from '../components/molecules/SiteFooter';
import { FOOTER } from '../constants';
</script>

<template>
  <main class="relative bg-gray-50">
    <SectionHeader class="pt-20 tt-bg-green" />
    <SectionTierBreakdown class="tt-bg-redish" />
    <SectionArtwork />
    <SectionPartners class="tt-bg-redish" />
    <SectionOfferings class="tt-bg-green" />
    <SectionRoadmap />
    <SectionTeam class="tt-bg-green" />
    <SiteFooter :items="FOOTER" />
  </main>
</template>
