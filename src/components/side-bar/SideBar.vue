<script setup lang="ts">
import { ref } from 'vue';
import Energy from '@/models/Energy';
import CardStyle from '@/models/CardStyle';
import type { CardForm } from '@/models/CardForm';
import CollapsibleSection from './CollapsibleSection.vue';
import BasicInfoSection from './sections/BasicInfoSection.vue';
import AbilitySection from './sections/AbilitySection.vue';
import PowersSection from './sections/PowersSection.vue';
import CombatSection from './sections/CombatSection.vue';
import MetadataSection from './sections/MetadataSection.vue';

const formData = ref<CardForm>({
  evolution: 0,
  name: '',
  hitPoints: 0,
  energy: Energy.NEUTRAL,
  evolvesFrom: undefined,
  backgroundPicture: '',
  foregroundPicture: '',
  abilityTitle: '',
  abilityDescription: '',
  powers: [],
  weakness: { energy: Energy.NEUTRAL, amount: 2 },
  retreat: [],
  artist: '',
  info: '',
  cardStyle: CardStyle.BASIC
});

const emit = defineEmits<{
  (e: 'submit', data: CardForm): void
}>();

const onSubmit = () => {
  emit('submit', formData.value);
};
</script>

<template>
  <div class="SideBar">
    <div class="SideBar-inner">
      <form @submit.prevent="onSubmit" class="card-form">
        <h2>Create Basic Card</h2>
        
        <CollapsibleSection title="Basic Information">
          <BasicInfoSection v-model="formData" />
        </CollapsibleSection>

        <CollapsibleSection title="Ability">
          <AbilitySection v-model="formData" />
        </CollapsibleSection>

        <CollapsibleSection title="Powers">
          <PowersSection v-model="formData" />
        </CollapsibleSection>

        <CollapsibleSection title="Combat">
          <CombatSection v-model="formData" />
        </CollapsibleSection>

        <CollapsibleSection title="Card Details">
          <MetadataSection v-model="formData" />
        </CollapsibleSection>

        <button type="submit" class="submit-btn">Create Card</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card-form {
  padding: 1rem;
  max-width: 500px;
  margin: 0 auto;
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
}

.submit-btn:hover {
  background-color: #45a049;
}

:deep(.form-group) {
  margin-bottom: 1rem;
}

:deep(label) {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

:deep(input[type="text"]),
:deep(input[type="number"]),
:deep(input[type="url"]),
:deep(select),
:deep(textarea) {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

:deep(fieldset) {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

:deep(legend) {
  font-weight: bold;
  padding: 0 0.5rem;
  background-color: #f9f9f9;
}

:deep(button) {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

:deep(button:disabled) {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
