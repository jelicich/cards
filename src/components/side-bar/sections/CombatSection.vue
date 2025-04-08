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
  <div class="SideBar-sectionContent">
    <!-- Weakness -->
    <fieldset class="SideBar-fieldset">
      <legend class="SideBar-legend">Weakness</legend>
      <div class="SideBar-formGroup">
        <label for="weaknessEnergy" class="SideBar-label">Energy Type</label>
        <select 
          id="weaknessEnergy" 
          v-model="modelValue.weakness.energy"
          class="SideBar-select"
          @change="emit('update:modelValue', modelValue)"
        >
          <option v-for="type in energyTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>
      <div class="SideBar-formGroup">
        <label for="weaknessAmount" class="SideBar-label">Amount</label>
        <input 
          type="number" 
          id="weaknessAmount" 
          v-model="modelValue.weakness.amount" 
          min="1" 
          required
          class="SideBar-input"
          @input="emit('update:modelValue', modelValue)"
        >
      </div>
    </fieldset>

    <!-- Retreat Cost -->
    <fieldset class="SideBar-fieldset">
      <legend class="SideBar-legend">Retreat Cost (Neutral Energy)</legend>
      <div class="SideBar-energyCounterList">
        <div class="SideBar-energyCounter">
          <span>{{ Energy.NEUTRAL }}</span>
          <div class="SideBar-counterControls">
            <button 
              type="button" 
              @click="modelValue.retreat.pop(); emit('update:modelValue', modelValue)"
              :disabled="!modelValue.retreat.length"
              class="SideBar-button SideBar-button--counter"
              :class="{ 'is-disabled': !modelValue.retreat.length }"
            >-</button>
            <span>{{ modelValue.retreat.length }}</span>
            <button 
              type="button" 
              @click="modelValue.retreat.push(Energy.NEUTRAL); emit('update:modelValue', modelValue)"
              class="SideBar-button SideBar-button--counter"
            >+</button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>
.SideBar-energyCounterList {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.SideBar-energyCounter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.SideBar-counterControls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: #f5f5f5;
  padding: 0.25rem;
  border-radius: 4px;
}

.SideBar-button {
  padding: 0.25rem 0.5rem;
  font-size: 1em;
  min-width: 2em;
  background-color: #666;
}

.SideBar-button:hover:not(:disabled) {
  background-color: #555;
}

.SideBar-button.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
