<script setup lang="ts">
import { ref, computed } from 'vue';
import Energy from '@/models/Energy';
import type { CardForm } from '@/models/CardForm';
import type Power from '@/models/Power';

const props = defineProps<{
  modelValue: CardForm;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: CardForm): void;
}>();

const MAX_POWERS = 2;
const energyTypes = Object.values(Energy);

const currentPower = ref<Partial<Power>>({
  name: '',
  points: 0,
  description: '',
  energies: [] // Always initialize with empty array
});

const getEnergyCount = (type: Energy) => {
  return currentPower.value.energies?.filter(energy => energy === type).length || 0;
};

const addEnergyToPower = (type: Energy) => {
  if (!currentPower.value.energies) {
    currentPower.value.energies = [];
  }
  currentPower.value.energies.push(type);
};

const removeEnergyFromPower = (type: Energy) => {
  if (!currentPower.value.energies) return;
  const index = currentPower.value.energies.lastIndexOf(type);
  if (index !== -1) {
    currentPower.value.energies.splice(index, 1);
  }
};

const canAddPower = computed(() => {
  const power = currentPower.value;
  return power.name && 
         power.points !== undefined && 
         power.energies && 
         power.energies.length > 0 &&
         props.modelValue.powers.length < MAX_POWERS;
});

const addPower = () => {
  const power = currentPower.value;
  if (!power.name || power.points === undefined || !power.energies?.length) return;

  props.modelValue.powers.push({
    name: power.name,
    points: power.points,
    description: power.description || '',
    energies: [...power.energies]
  });
  
  emit('update:modelValue', props.modelValue);
  currentPower.value = { name: '', points: 0, description: '', energies: [] };
};

</script>

<template>
  <div class="SideBar-sectionContent">
    <div class="SideBar-powersList">
      <div v-for="(power, index) in modelValue.powers" :key="index" class="SideBar-powerItem">
        <div>
          <p class="SideBar-powerTitle"><strong>{{ power.name }}</strong> - {{ power.points }} points</p>
          <p class="SideBar-powerEnergies">
            Required Energy:
            <span v-for="(energy, eIndex) in power.energies" :key="eIndex" class="SideBar-energyIcon">
              {{ energy }}
            </span>
          </p>
          <p v-if="power.description" class="SideBar-powerDescription">{{ power.description }}</p>
        </div>
        <button 
          type="button" 
          class="SideBar-button SideBar-button--remove" 
          @click="modelValue.powers.splice(index, 1); emit('update:modelValue', modelValue)"
        >
          Remove
        </button>
      </div>
    </div>
    
    <template v-if="modelValue.powers.length < MAX_POWERS">
      <div class="SideBar-formGroup">
        <label for="powerName" class="SideBar-label">Power Name</label>
        <input type="text" id="powerName" v-model="currentPower.name" class="SideBar-input">
      </div>
      <div class="SideBar-formGroup">
        <label for="powerPoints" class="SideBar-label">Points</label>
        <input type="number" id="powerPoints" v-model="currentPower.points" min="0" class="SideBar-input">
      </div>
      <div class="SideBar-formGroup">
        <label for="powerDescription" class="SideBar-label">Description</label>
        <textarea id="powerDescription" v-model="currentPower.description" class="SideBar-textarea"></textarea>
      </div>
      <div class="SideBar-formGroup">
        <label class="SideBar-label">Energy Requirements</label>
        <div class="SideBar-energyCounterList">
          <div v-for="type in energyTypes" :key="type" class="SideBar-energyCounter">
            <span>{{ type }}</span>
            <div class="SideBar-counterControls">
              <button 
                type="button" 
                @click="removeEnergyFromPower(type)"
                :disabled="!getEnergyCount(type)"
                class="SideBar-button SideBar-button--counter"
                :class="{ 'is-disabled': !getEnergyCount(type) }"
              >-</button>
              <span>{{ getEnergyCount(type) }}</span>
              <button 
                type="button" 
                @click="addEnergyToPower(type)"
                class="SideBar-button SideBar-button--counter"
              >+</button>
            </div>
          </div>
        </div>
      </div>
      <button 
        type="button" 
        @click="addPower"
        :disabled="!canAddPower"
        class="SideBar-button SideBar-button--addPower"
        :class="{ 'is-disabled': !canAddPower }"
      >
        Add Power
      </button>
    </template>
    <p v-else class="SideBar-maxPowersMessage">Maximum number of powers reached</p>
  </div>
</template>

<style lang="scss">
.SideBar {
  &-powersList {
    margin-bottom: 1rem;
  }

  &-powerItem {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.75rem;
    background-color: #f0f0f0;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  &-powerTitle {
    margin: 0.25rem 0;
  }

  &-powerEnergies {
    font-size: 0.9em;
    color: #666;
  }

  &-powerDescription {
    font-size: 0.9em;
    font-style: italic;
  }

  &-energyCounterList {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    background-color: #fff;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  &-energyCounter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &-counterControls {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: #f5f5f5;
    padding: 0.25rem;
    border-radius: 4px;
  }

  &-button {
    &--counter {
      padding: 0.25rem 0.5rem;
      font-size: 1em;
      min-width: 2em;
      background-color: #666;

      &:hover:not(.is-disabled) {
        background-color: #555;
      }
    }

    &--remove {
      background-color: #dc3545;
      padding: 0.25rem 0.75rem;

      &:hover {
        background-color: #c82333;
      }
    }

    &--addPower {
      margin-top: 1rem;
      width: 100%;
    }
  }

  &-maxPowersMessage {
    text-align: center;
    color: #666;
    font-style: italic;
    margin: 1rem 0;
  }
}
</style>
