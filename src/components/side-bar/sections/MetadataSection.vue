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
  <div class="SideBar-sectionContent">
    <div class="SideBar-formGroup">
      <label for="artist" class="SideBar-label">Artist</label>
      <input 
        type="text" 
        id="artist" 
        v-model="modelValue.artist" 
        required
        class="SideBar-input"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="info" class="SideBar-label">Card Info</label>
      <input 
        type="text" 
        id="info" 
        v-model="modelValue.info" 
        required
        class="SideBar-input"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="cardStyle" class="SideBar-label">Card Style</label>
      <select 
        id="cardStyle" 
        v-model="modelValue.cardStyle"
        class="SideBar-select"
        @change="emit('update:modelValue', modelValue)"
      >
        <option v-for="style in cardStyles" :key="style" :value="style">{{ style }}</option>
      </select>
    </div>
  </div>
</template>
