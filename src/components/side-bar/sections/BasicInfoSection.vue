<script setup lang="ts">
import Energy from '@/models/Energy';
import type { CardForm } from '@/models/CardForm';

defineProps<{
  modelValue: CardForm;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: CardForm): void;
}>();

const energyTypes = Object.values(Energy);
</script>

<template>
  <div class="section-content">
    <div class="form-group">
      <label for="evolution">Evolution</label>
      <input 
        type="number" 
        id="evolution" 
        v-model="modelValue.evolution" 
        min="0" 
        max="2" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="name">Name</label>
      <input 
        type="text" 
        id="name" 
        v-model="modelValue.name" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="hitPoints">Hit Points</label>
      <input 
        type="number" 
        id="hitPoints" 
        v-model="modelValue.hitPoints" 
        min="0" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="energy">Energy Type</label>
      <select 
        id="energy" 
        v-model="modelValue.energy" 
        required
        @change="emit('update:modelValue', modelValue)"
      >
        <option v-for="type in energyTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <fieldset>
      <legend>Evolves From (Optional)</legend>
      <div class="form-group">
        <label>
          <input 
            type="checkbox" 
            v-model="modelValue.evolvesFrom" 
            :value="{ name: '', image: '' }" 
            :true-value="{ name: '', image: '' }" 
            :false-value="undefined"
            @change="emit('update:modelValue', modelValue)"
          >
          This Pokémon evolves from another Pokémon
        </label>
      </div>
      <template v-if="modelValue.evolvesFrom">
        <div class="form-group">
          <label for="evolvesFromName">Pokemon Name</label>
          <input 
            type="text" 
            id="evolvesFromName" 
            v-model="modelValue.evolvesFrom.name"
            @input="emit('update:modelValue', modelValue)"
          >
        </div>
        <div class="form-group">
          <label for="evolvesFromImage">Pokemon Image URL</label>
          <input 
            type="url" 
            id="evolvesFromImage" 
            v-model="modelValue.evolvesFrom.image"
            @input="emit('update:modelValue', modelValue)"
          >
        </div>
      </template>
    </fieldset>

    <div class="form-group">
      <label for="backgroundPicture">Background Picture URL</label>
      <input 
        type="text" 
        id="backgroundPicture" 
        v-model="modelValue.backgroundPicture" 
        required
        @input="emit('update:modelValue', modelValue)"
      >
    </div>

    <div class="form-group">
      <label for="foregroundPicture">Foreground Picture URL (Optional)</label>
      <input 
        type="text" 
        id="foregroundPicture" 
        v-model="modelValue.foregroundPicture"
        @input="emit('update:modelValue', modelValue)"
      >
    </div>
  </div>
</template>
