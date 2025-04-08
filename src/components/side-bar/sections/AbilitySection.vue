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
  <div class="section-content">
    <div class="form-group">
      <label for="abilityTitle">Title</label>
      <input 
        type="text" 
        id="abilityTitle" 
        v-model="modelValue.abilityTitle"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>
    <div class="form-group">
      <label for="abilityDescription">Description</label>
      <textarea 
        id="abilityDescription" 
        v-model="modelValue.abilityDescription"
        @input="emit('update:modelValue', modelValue)"
      ></textarea>
    </div>
  </div>
</template>
