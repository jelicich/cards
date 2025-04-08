<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

const isOpen = ref(true);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="collapsible-section">
    <button class="section-header" @click="toggleSection">
      <h3>{{ title }}</h3>
      <span class="toggle-icon" :class="{ 'is-open': isOpen }">▼</span>
    </button>
    <div class="section-body" :class="{ 'is-open': isOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.collapsible-section {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #fff;
}

.section-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.section-header:hover {
  background-color: #e9ecef;
}

.section-header h3 {
  margin: 0;
  font-size: 1.1em;
  color: #333;
}

.toggle-icon {
  font-size: 0.8em;
  transition: transform 0.2s ease;
  color: #666;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
}

.section-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.section-body.is-open {
  max-height: 2000px;
  transition: max-height 0.5s ease-in;
}

.section-body > :deep(*) {
  padding: 1rem;
}
</style>
