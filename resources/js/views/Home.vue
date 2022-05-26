<script setup>
import SectionHeader from '../components/molecules/SectionHeader';
import SectionTierBreakdown from '../components/molecules/SectionTierBreakdown';
import SectionArtwork from '../components/molecules/SectionArtwork';
import SectionPartners from '../components/molecules/SectionPartners';
import SectionRoadmap from '../components/molecules/SectionRoadmap';
import SectionTeam from '../components/molecules/SectionTeam';
</script>

<template>
  <main class="relative bg-gray-50">
    <SectionHeader class="pt-20 tt-bg-green" />
    <SectionTierBreakdown class="tt-bg-redish" />
    <SectionArtwork />
    <SectionPartners class="tt-bg-redish" />
    <SectionRoadmap />
    <SectionTeam class="tt-bg-green" />
  </main>
</template>
