<script setup>
import SectionHeader from '../components/molecules/SectionHeader';
import SectionTierBreakdown from '../components/molecules/SectionTierBreakdown';
import SectionArtwork from '../components/molecules/SectionArtwork';
import SectionPartners from '../components/molecules/SectionPartners';
</script>

<template>
  <main class="relative bg-gray-50">
    <SectionHeader class="pt-20" />
    <SectionTierBreakdown />
    <SectionArtwork />
    <SectionPartners />
  </main>
</template>
