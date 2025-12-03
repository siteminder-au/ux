<template>
  <div v-if="show" class="grid-overlay">
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
  </div>
</template>

<script setup lang="ts">
/**
 * GridOverlay Component
 *
 * Displays a 4-column reference grid overlay for aligning form content.
 * Used across all prototypes for consistent layout verification.
 */
defineProps<{
  show: boolean
}>()
</script>

<style scoped lang="scss">
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9999;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-column {
    background: rgba(255, 100, 100, 0.08);
    border: 1px dashed rgba(255, 0, 0, 0.3);
  }
}
</style>
