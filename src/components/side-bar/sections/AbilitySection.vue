<script setup lang="ts">
import type { CardForm } from '@/models/CardForm';

defineProps<{
  modelValue: CardForm;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: CardForm): void;
}>();
</script>

<template>
  <div class="SideBar-sectionContent">
    <div class="SideBar-formGroup">
      <label for="abilityTitle" class="SideBar-label">Title</label>
      <input 
        type="text" 
        id="abilityTitle" 
        v-model="modelValue.abilityTitle"
        class="SideBar-input"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>
    <div class="SideBar-formGroup">
      <label for="abilityDescription" class="SideBar-label">Description</label>
      <textarea 
        id="abilityDescription" 
        v-model="modelValue.abilityDescription"
        class="SideBar-textarea"
        @input="emit('update:modelValue', modelValue)"
      ></textarea>
    </div>
  </div>
</template>
