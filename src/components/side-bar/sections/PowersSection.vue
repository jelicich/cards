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
  energies: []
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
  if (currentPower.value.energies) {
    const index = currentPower.value.energies.lastIndexOf(type);
    if (index !== -1) {
      currentPower.value.energies.splice(index, 1);
    }
  }
};

const canAddPower = computed(() => {
  return currentPower.value.name && 
         currentPower.value.points !== undefined && 
         currentPower.value.energies?.length > 0 &&
         props.modelValue.powers.length < MAX_POWERS;
});

const addPower = () => {
  if (currentPower.value.name && currentPower.value.points !== undefined && currentPower.value.energies?.length) {
    props.modelValue.powers.push({
      name: currentPower.value.name,
      points: currentPower.value.points,
      description: currentPower.value.description || '',
      energies: [...(currentPower.value.energies || [])]
    });
    emit('update:modelValue', props.modelValue);
    currentPower.value = { name: '', points: 0, description: '', energies: [] };
  }
};
</script>

<template>
  <div class="section-content">
    <div class="powers-list">
      <div v-for="(power, index) in modelValue.powers" :key="index" class="power-item">
        <div>
          <p><strong>{{ power.name }}</strong> - {{ power.points }} points</p>
          <p class="power-energies">
            Required Energy:
            <span v-for="(energy, eIndex) in power.energies" :key="eIndex" class="energy-icon">
              {{ energy }}
            </span>
          </p>
          <p v-if="power.description" class="power-description">{{ power.description }}</p>
        </div>
        <button 
          type="button" 
          class="remove-btn" 
          @click="modelValue.powers.splice(index, 1); emit('update:modelValue', modelValue)"
        >
          Remove
        </button>
      </div>
    </div>
    
    <template v-if="modelValue.powers.length < MAX_POWERS">
      <div class="form-group">
        <label for="powerName">Power Name</label>
        <input type="text" id="powerName" v-model="currentPower.name">
      </div>
      <div class="form-group">
        <label for="powerPoints">Points</label>
        <input type="number" id="powerPoints" v-model="currentPower.points" min="0">
      </div>
      <div class="form-group">
        <label for="powerDescription">Description</label>
        <textarea id="powerDescription" v-model="currentPower.description"></textarea>
      </div>
      <div class="form-group">
        <label>Energy Requirements</label>
        <div class="energy-counter-list">
          <div v-for="type in energyTypes" :key="type" class="energy-counter">
            <span>{{ type }}</span>
            <div class="counter-controls">
              <button 
                type="button" 
                @click="removeEnergyFromPower(type)"
                :disabled="!getEnergyCount(type)"
                class="counter-btn"
              >-</button>
              <span>{{ getEnergyCount(type) }}</span>
              <button 
                type="button" 
                @click="addEnergyToPower(type)"
                class="counter-btn"
              >+</button>
            </div>
          </div>
        </div>
      </div>
      <button 
        type="button" 
        @click="addPower"
        :disabled="!canAddPower"
        class="add-power-btn"
      >
        Add Power
      </button>
    </template>
    <p v-else class="max-powers-message">Maximum number of powers reached</p>
  </div>
</template>

<style scoped>
.powers-list {
  margin-bottom: 1rem;
}

.power-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem;
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.power-item p {
  margin: 0.25rem 0;
}

.power-energies {
  font-size: 0.9em;
  color: #666;
}

.power-description {
  font-size: 0.9em;
  font-style: italic;
}

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

.remove-btn {
  background-color: #dc3545;
  padding: 0.25rem 0.75rem;
}

.remove-btn:hover {
  background-color: #c82333;
}

.add-power-btn {
  margin-top: 1rem;
  width: 100%;
}

.max-powers-message {
  text-align: center;
  color: #666;
  font-style: italic;
  margin: 1rem 0;
}
</style>
