<template>
  <section class="demo-section">
    <h2>Content Component</h2>
    <div class="component-demo">
      <SmButton type="primary" @click="$emit('button-clicked')">
        Click Me
      </SmButton>
      <SmButton type="secondary" @click="$emit('button-clicked')">
        Or Me
      </SmButton>
    </div>
  </section>
</template>

<script setup>
import SmButton from '@sui/app/components/sm-button/sm-button.vue'

defineEmits(['button-clicked'])
</script>

<style scoped>
.demo-section {
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 1rem;
  color: #555;
}

.component-demo {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 1rem;
  align-items: flex-start;
}

.component-demo .sm-button {
  display: inline-flex;
}
</style>
