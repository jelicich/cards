<script setup lang="ts">
import { ref } from 'vue';
import Energy from '@/models/Energy';
import type { CardForm } from '@/models/CardForm';

const props = defineProps<{
  modelValue: CardForm;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: CardForm): void;
}>();

const isMVP = ref(true);

const energyTypes = Object.values(Energy);

const handleFileSelect = (event: Event, type: 'background' | 'foreground') => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    if (type === 'background') {
      props.modelValue.backgroundPicture = url;
    } else {
      props.modelValue.foregroundPicture = url;
    }
    emit('update:modelValue', props.modelValue);
  }
};
</script>

<template>
  <div class="SideBar-sectionContent">
    <div v-if="!isMVP"class="SideBar-formGroup">
      <label for="evolution" class="SideBar-label">Evolution</label>
      <input 
        type="number" 
        id="evolution" 
        v-model="props.modelValue.evolution" 
        min="0" 
        max="2" 
        required
        class="SideBar-input"
        @input="emit('update:modelValue', props.modelValue)"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="name" class="SideBar-label">Name</label>
      <input 
        type="text" 
        id="name" 
        v-model="props.modelValue.name" 
        required
        class="SideBar-input"
        @input="emit('update:modelValue', props.modelValue)"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="hitPoints" class="SideBar-label">Hit Points</label>
      <input 
        type="number" 
        id="hitPoints" 
        v-model="props.modelValue.hitPoints" 
        min="0" 
        required
        class="SideBar-input"
        @input="emit('update:modelValue', props.modelValue)"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="energy" class="SideBar-label">Energy Type</label>
      <select 
        id="energy" 
        v-model="props.modelValue.energy" 
        required
        class="SideBar-select"
        @change="emit('update:modelValue', props.modelValue)"
      >
        <option v-for="type in energyTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <fieldset v-if="!isMVP" class="SideBar-fieldset">
      <legend class="SideBar-legend">Evolves From (Optional)</legend>
      <div class="SideBar-formGroup">
        <label class="SideBar-label">
          <input 
            type="checkbox" 
            v-model="props.modelValue.evolvesFrom" 
            :value="{ name: '', image: '' }" 
            :true-value="{ name: '', image: '' }" 
            :false-value="undefined"
            class="SideBar-input"
            @change="emit('update:modelValue', props.modelValue)"
          >
          This Pokémon evolves from another Pokémon
        </label>
      </div>
      <template v-if="props.modelValue.evolvesFrom">
        <div class="SideBar-formGroup">
          <label for="evolvesFromName" class="SideBar-label">Pokemon Name</label>
          <input 
            type="text" 
            id="evolvesFromName" 
            v-model="props.modelValue.evolvesFrom.name"
            class="SideBar-input"
            @input="emit('update:modelValue', props.modelValue)"
          >
        </div>
        <div class="SideBar-formGroup">
          <label for="evolvesFromImage" class="SideBar-label">Pokemon Image URL</label>
          <input 
            type="text" 
            id="evolvesFromImage" 
            v-model="props.modelValue.evolvesFrom.image"
            class="SideBar-input"
            @input="emit('update:modelValue', props.modelValue)"
          >
        </div>
      </template>
    </fieldset>

    <div class="SideBar-formGroup">
      <label for="backgroundPicture" class="SideBar-label">Background Picture</label>
      <input 
        type="file" 
        id="backgroundPicture" 
        accept="image/*"
        class="SideBar-input SideBar-input--file"
        @change="handleFileSelect($event, 'background')"
      >
    </div>

    <div class="SideBar-formGroup">
      <label for="foregroundPicture" class="SideBar-label">Foreground Picture (Optional)</label>
      <input 
        type="file" 
        id="foregroundPicture" 
        accept="image/*"
        class="SideBar-input SideBar-input--file"
        @change="handleFileSelect($event, 'foreground')"
      >
    </div>
  </div>
</template>
<style lang="scss">

</style>
