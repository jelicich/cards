<script setup lang="ts">
import CardStyle from '@/models/CardStyle';
import type { CardForm } from '@/models/CardForm';

defineProps<{
  modelValue: CardForm;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: CardForm): void;
}>();

const cardStyles = Object.values(CardStyle);
</script>

<template>
  <div class="section-content">
    <div class="form-group">
      <label for="artist">Artist</label>
      <input 
        type="text" 
        id="artist" 
        v-model="modelValue.artist" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="info">Card Info</label>
      <input 
        type="text" 
        id="info" 
        v-model="modelValue.info" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="cardStyle">Card Style</label>
      <select 
        id="cardStyle" 
        v-model="modelValue.cardStyle"
        @change="emit('update:modelValue', modelValue)"
      >
        <option v-for="style in cardStyles" :key="style" :value="style">{{ style }}</option>
      </select>
    </div>
  </div>
</template>
