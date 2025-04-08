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
    <!-- Weakness -->
    <fieldset>
      <legend>Weakness</legend>
      <div class="form-group">
        <label for="weaknessEnergy">Energy Type</label>
        <select 
          id="weaknessEnergy" 
          v-model="modelValue.weakness.energy"
          @change="emit('update:modelValue', modelValue)"
        >
          <option v-for="type in energyTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="weaknessAmount">Amount</label>
        <input 
          type="number" 
          id="weaknessAmount" 
          v-model="modelValue.weakness.amount" 
          min="1" 
          required
          @input="emit('update:modelValue', modelValue)"
        >
      </div>
    </fieldset>

    <!-- Retreat Cost -->
    <fieldset>
      <legend>Retreat Cost (Neutral Energy)</legend>
      <div class="energy-counter-list">
        <div class="energy-counter">
          <span>{{ Energy.NEUTRAL }}</span>
          <div class="counter-controls">
            <button 
              type="button" 
              @click="modelValue.retreat.pop(); emit('update:modelValue', modelValue)"
              :disabled="!modelValue.retreat.length"
              class="counter-btn"
            >-</button>
            <span>{{ modelValue.retreat.length }}</span>
            <button 
              type="button" 
              @click="modelValue.retreat.push(Energy.NEUTRAL); emit('update:modelValue', modelValue)"
              class="counter-btn"
            >+</button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>
.energy-counter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.energy-counter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.counter-controls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: #f5f5f5;
  padding: 0.25rem;
  border-radius: 4px;
}

.counter-btn {
  padding: 0.25rem 0.5rem;
  font-size: 1em;
  min-width: 2em;
  background-color: #666;
}

.counter-btn:hover:not(:disabled) {
  background-color: #555;
}
</style>
