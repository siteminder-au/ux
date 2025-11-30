<template>
  <div class="prototype-container">
    <h1>New Prototype</h1>
    <p class="intro">Description of your prototype goes here.</p>

    <section class="demo-section">
      <h2>Section Title</h2>
      <div class="component-demo">
        <SmButton type="primary" @click="handleClick">Click Me</SmButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import $ from 'jquery'
import SmButton from '@sui/app/components/sm-button/sm-button.vue'
// Import more components as needed

const handleClick = () => {
  console.log('Button clicked!')
}

onMounted(() => {
  // jQuery and other initialization code goes here
  console.log('Prototype mounted')
})
</script>

<style scoped>
.prototype-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro {
  color: #666;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

h1 {
  color: #333;
  margin-bottom: 1rem;
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

/* Fix for button display issue when used in flex containers */
.component-demo .sm-button {
  display: inline-flex;
}
</style>
