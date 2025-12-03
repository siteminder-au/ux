<template>
  <!-- Settings Overlay -->
  <div v-if="showSettings" class="settings-overlay" @click.self="showSettings = false">
    <div class="settings-panel">
      <div class="settings-header">
        <h2 class="sm-h4">Settings</h2>
        <button class="close-button" @click="showSettings = false">×</button>
      </div>
      <div class="settings-content">
        <div class="settings-section">
          <h3 class="settings-section-title">Keyboard Shortcuts</h3>
          <div class="shortcut-item">
            <span class="shortcut-key">~</span>
            <span class="shortcut-description">Toggle this settings panel</span>
          </div>
          <div class="shortcut-item">
            <span class="shortcut-key">Esc</span>
            <span class="shortcut-description">Close this settings panel</span>
          </div>
        </div>

        <!-- Slot for prototype-specific settings -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * PrototypeSettings Component
 *
 * Reusable settings overlay shell for all prototypes.
 * Provides the modal UI and keyboard shortcut handling (~, Esc).
 * Each prototype can pass its own settings content via the default slot.
 */
import { ref, onMounted, onUnmounted } from 'vue'

// Settings overlay visibility state
const showSettings = ref(false)

// Keyboard handler for tilde and escape keys
const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === '`' || e.key === '~') {
    showSettings.value = !showSettings.value
  }
  if (e.key === 'Escape') {
    if (showSettings.value) {
      showSettings.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped lang="scss">
.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.settings-panel {
  background: var(--color-true-white, #ffffff);
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.2s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 32px;
    line-height: 1;
    color: #9ca3af;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      background: #f3f4f6;
      color: #1f2937;
    }
  }
}

.settings-content {
  padding: 24px;
  overflow-y: auto;
}

.settings-section {
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
}

.settings-section-title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #4b5563;
  margin: 0 0 16px 0;
}

.shortcut-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }

  .shortcut-key {
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    font-weight: 600;
    background: #f3f4f6;
    color: #1f2937;
    padding: 4px 12px;
    border-radius: 4px;
    min-width: 60px;
    text-align: center;
    border: 1px solid #d1d5db;
  }

  .shortcut-description {
    font-size: 14px;
    color: #1f2937;
  }
}

.toggle-item {
  padding: 12px 0;

  .toggle-label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    font-size: 14px;
    color: #1f2937;

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #0066cc;
    }

    &:hover {
      span {
        color: #0066cc;
      }
    }
  }
}
</style>
