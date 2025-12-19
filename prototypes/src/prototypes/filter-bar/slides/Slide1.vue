<template>
  <div class="slide-wrapper">
    <!-- TOP: Proposed filter bar -->
    <div class="slide-top">
      <div class="container-header">Proposed</div>
      <div class="container-content">
        <FilterBarDemo />
      </div>
    </div>

    <!-- BOTTOM: Reference images -->
    <div class="slide-bottom">
      <div class="container-header">Reference</div>
      <div class="container-content">
        <img src="/images/filter-bar/image 1.png" alt="Standard filter bar overview" />
        <img src="/images/filter-bar/active-filters.png" alt="Active filters display" />
        <img src="/images/filter-bar/image 18.png" alt="Filter bar with modal" />
      </div>
    </div>

    <!-- Settings Panel -->
    <PrototypeSettings>
      <DisplaySettings />
    </PrototypeSettings>
  </div>
</template>

<script setup>
import FilterBarDemo from '../components/FilterBarDemo.vue'
import PrototypeSettings from '@/shared/components/PrototypeSettings.vue'
import DisplaySettings from '@/prototypes/dynamic-form/components/DisplaySettings.vue'
</script>

<style scoped lang="scss">
@import '../styles/index.scss';
</style>
