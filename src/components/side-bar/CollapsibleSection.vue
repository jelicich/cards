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
  <div class="SideBar-section">
    <button class="SideBar-sectionHeader" @click="toggleSection">
      <h3 class="SideBar-sectionTitle">{{ title }}</h3>
      <span class="SideBar-toggleIcon" :class="{ 'is-open': isOpen }">▼</span>
    </button>
    <div class="SideBar-sectionBody" :class="{ 'is-open': isOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.SideBar-section {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #fff;
}

.SideBar-sectionHeader {
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

.SideBar-sectionHeader:hover {
  background-color: #e9ecef;
}

.SideBar-sectionTitle {
  margin: 0;
  font-size: 1.1em;
  color: #333;
}

.SideBar-toggleIcon {
  font-size: 0.8em;
  transition: transform 0.2s ease;
  color: #666;
}

.SideBar-toggleIcon.is-open {
  transform: rotate(180deg);
}

.SideBar-sectionBody {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.SideBar-sectionBody.is-open {
  max-height: 2000px;
  transition: max-height 0.5s ease-in;
}

.SideBar-sectionBody > :deep(*) {
  padding: 1rem;
}
</style>
