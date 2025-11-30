<template>
  <div class="app">
    <nav class="prototype-nav">
      <h1 class="nav-title">SUI Prototypes</h1>
      <div class="nav-links">
        <button
          v-for="proto in prototypes"
          :key="proto.id"
          :class="['nav-button', { active: currentPrototype === proto.id }]"
          @click="currentPrototype = proto.id"
        >
          {{ proto.name }}
        </button>
      </div>
    </nav>

    <main class="prototype-content">
      <component :is="prototypes.find(p => p.id === currentPrototype)?.component" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ComponentShowcase from './prototypes/component-showcase/ComponentShowcase.vue'
import ExamplePrototype from './prototypes/example-multi-file/ExamplePrototype.vue'

const prototypes = [
  { id: 'showcase', name: 'Component Showcase', component: ComponentShowcase },
  { id: 'example', name: 'Multi-File Example', component: ExamplePrototype },
  // Add more prototypes here as you create them:
  // { id: 'login-flow', name: 'Login Flow', component: LoginFlow },
  // { id: 'dashboard', name: 'Dashboard', component: Dashboard },
]

const currentPrototype = ref('showcase')
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: #f5f5f5;
}

.prototype-nav {
  background: white;
  border-bottom: 2px solid #e0e0e0;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-button {
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.2s;
}

.nav-button:hover {
  background: #e3f2fd;
  color: #1976D2;
}

.nav-button.active {
  background: #2196F3;
  color: white;
  border-color: #1976D2;
}

.prototype-content {
  padding: 2rem;
}
</style>

<style>
/* Global styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>
