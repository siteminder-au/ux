<template>
  <div class="filter-bar">
    <!-- Room Types Multi-Select -->
    <SmMultiSelect
      v-model="roomTypes"
      label="Room types"
      name="roomTypes"
      placeholder="All room types"
      class="filter-select"
      :options="roomTypeOptions"
      :filterable="false"
    />

    <!-- Rate Plans Multi-Select -->
    <SmMultiSelect
      v-model="ratePlans"
      label="Rate plans"
      name="ratePlans"
      placeholder="All rate plans"
      class="filter-select"
      :options="ratePlanOptions"
      :filterable="false"
    />

    <!-- More Filters Button -->
    <SmButton
      type="tertiary"
      class="more-filters-btn"
      @click="showModal = true"
    >
      <SmIcon name="utility-filter" />
      More Filters
      <SmBadge v-if="moreFiltersCount > 0">{{ moreFiltersCount }}</SmBadge>
    </SmButton>

    <!-- Search Button -->
    <SmButton
      type="primary"
      class="search-btn"
      @click="handleSearch"
    >
      <SmIcon name="utility-search" />
      Search
    </SmButton>

    <!-- Active Filters Pills -->
    <ActiveFiltersPills
      v-if="hasActiveFilters"
      :active-filters="activeFilters"
      @clear-filter="clearFilter"
      @clear-all="clearAllFilters"
    />

    <!-- More Filters Modal -->
    <div v-if="showModal" class="filter-modal-overlay" @click="showModal = false">
      <div class="filter-modal" @click.stop>
        <div class="modal-header">
          <h3>More Filters</h3>
          <SmButton type="text" @click="showModal = false">
            <SmIcon name="action-close" />
          </SmButton>
        </div>
        <div class="modal-body">
          <div class="modal-filters">
            <!-- Channels Multi-Select -->
            <SmMultiSelect
              v-model="channels"
              label="Channels"
              name="channels"
              placeholder="All channels"
              class="filter-select"
              :options="channelOptions"
              :filterable="false"
            />

            <!-- Room Rates Text Input -->
            <SmInput
              v-model="roomRates"
              label="Room rates"
              placeholder="Search room rates..."
              class="filter-input"
            />

            <!-- Occupancy Based Pricing Multi-Select -->
            <SmMultiSelect
              v-model="occupancyPricing"
              label="Occupancy based pricing"
              name="occupancyPricing"
              placeholder="Select occupancy"
              class="filter-select"
              :options="occupancyPricingOptions"
              :filterable="false"
            />
          </div>
        </div>
        <div class="modal-footer">
          <SmButton type="tertiary" @click="showModal = false">Cancel</SmButton>
          <SmButton type="primary" @click="applyFilters">Apply Filters</SmButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ActiveFiltersPills from './ActiveFiltersPills.vue'

// Options data for multi-selects
const roomTypeOptions = ref([
  { label: 'Standard Room', code: 'standard' },
  { label: 'Superior Room', code: 'superior' },
  { label: 'Deluxe Room', code: 'deluxe' },
  { label: 'Executive Room', code: 'executive' },
  { label: 'Suite', code: 'suite' },
  { label: 'Junior Suite', code: 'junior-suite' },
  { label: 'Studio', code: 'studio' },
  { label: 'Apartment', code: 'apartment' },
  { label: 'Penthouse', code: 'penthouse' },
  { label: 'Villa', code: 'villa' },
])

const ratePlanOptions = ref([
  { label: 'Standard Rate', code: 'standard' },
  { label: 'Flexible Rate', code: 'flexible' },
  { label: 'Non-refundable', code: 'non-refundable' },
  { label: 'Advance Purchase', code: 'advance-purchase' },
  { label: 'Early Bird', code: 'early-bird' },
  { label: 'Last Minute Deal', code: 'last-minute' },
  { label: 'Weekend Special', code: 'weekend' },
  { label: 'Corporate Rate', code: 'corporate' },
  { label: 'Government Rate', code: 'government' },
  { label: 'Member Rate', code: 'member' },
])

const channelOptions = ref([
  { label: 'Direct Booking', code: 'direct' },
  { label: 'Booking.com', code: 'booking' },
  { label: 'Expedia', code: 'expedia' },
  { label: 'Airbnb', code: 'airbnb' },
  { label: 'Agoda', code: 'agoda' },
  { label: 'Hotels.com', code: 'hotels' },
  { label: 'Trivago', code: 'trivago' },
  { label: 'Priceline', code: 'priceline' },
  { label: 'Trip.com', code: 'trip' },
  { label: 'VRBO', code: 'vrbo' },
])

const occupancyPricingOptions = ref([
  { label: 'Enabled', code: 'enabled' },
  { label: 'Disabled', code: 'disabled' },
  { label: 'Single Occupancy', code: 'single' },
  { label: 'Double Occupancy', code: 'double' },
  { label: 'Triple Occupancy', code: 'triple' },
  { label: 'Quad Occupancy', code: 'quad' },
  { label: 'Family Occupancy', code: 'family' },
  { label: 'Group Occupancy', code: 'group' },
])

// Filter state with some default selections to demonstrate functionality
const roomTypes = ref('deluxe,suite')
const ratePlans = ref('standard,flexible')
const channels = ref('booking,expedia')
const roomRates = ref('')
const occupancyPricing = ref('enabled')
const showModal = ref(false)

// Computed
const activeFilters = computed(() => {
  const filters = {}
  if (roomTypes.value) {
    const count = roomTypes.value.split(',').filter(v => v).length
    filters.roomTypes = `${count} selected`
  }
  if (ratePlans.value) {
    const count = ratePlans.value.split(',').filter(v => v).length
    filters.ratePlans = `${count} selected`
  }
  if (channels.value) {
    const count = channels.value.split(',').filter(v => v).length
    filters.channels = `${count} selected`
  }
  if (roomRates.value) filters.roomRates = roomRates.value
  if (occupancyPricing.value) {
    const selected = occupancyPricing.value.split(',').filter(v => v)
    const labels = selected.map(code =>
      occupancyPricingOptions.value.find(opt => opt.code === code)?.label || code
    )
    filters.occupancyPricing = labels.join(', ')
  }
  return filters
})

const hasActiveFilters = computed(() => Object.keys(activeFilters.value).length > 0)

const moreFiltersCount = computed(() => {
  let count = 0
  if (channels.value) count++
  if (roomRates.value) count++
  if (occupancyPricing.value) count++
  return count
})

// Methods
const handleSearch = () => {
  console.log('Search triggered with filters:', activeFilters.value)
}

const clearFilter = (filterKey) => {
  switch(filterKey) {
    case 'roomTypes': roomTypes.value = ''; break
    case 'ratePlans': ratePlans.value = ''; break
    case 'channels': channels.value = ''; break
    case 'roomRates': roomRates.value = ''; break
    case 'occupancyPricing': occupancyPricing.value = ''; break
  }
}

const clearAllFilters = () => {
  roomTypes.value = ''
  ratePlans.value = ''
  channels.value = ''
  roomRates.value = ''
  occupancyPricing.value = ''
}

const applyFilters = () => {
  showModal.value = false
  handleSearch()
}
</script>

<style scoped lang="scss">
@import '../styles/filter-bar-component.scss';
</style>
