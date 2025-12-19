<template>
  <div class="active-filters">
    <span class="active-filters-label">Active filters:</span>
    <SmTag
      v-for="(value, key) in activeFilters"
      :key="key"
      :closable="true"
      @close="$emit('clear-filter', key)"
    >
      {{ formatFilterLabel(key) }}: {{ value }}
    </SmTag>
    <SmButton type="text" size="small" @click="$emit('clear-all')">
      Clear all
    </SmButton>
  </div>
</template>

<script setup>
defineProps({
  activeFilters: {
    type: Object,
    required: true
  }
})

defineEmits(['clear-filter', 'clear-all'])

const formatFilterLabel = (key) => {
  const labels = {
    roomTypes: 'Room Types',
    ratePlans: 'Rate Plans',
    channels: 'Channels',
    roomRates: 'Room Rates',
    occupancyPricing: 'Occupancy Based Pricing'
  }
  return labels[key] || key
}
</script>

<style scoped lang="scss">
.active-filters {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 4px;
  margin-top: 1rem;
}

.active-filters-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: #666;
}
</style>
