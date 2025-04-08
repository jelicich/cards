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
  weakness: { energy: Energy.NEUTRAL, amount: 20 },
  retreat: [],
  artist: '',
  info: '',
  cardStyle: CardStyle.BASIC
});

const emit = defineEmits<{
  (e: 'submit', data: CardForm): void
}>();

const onSubmit = () => {
  emit('submit', {...formData.value});
};
</script>

<template>
  <div class="SideBar">
    <div class="SideBar-inner">
      <form @submit.prevent="onSubmit" class="SideBar-form">
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

        <button type="submit" class="SideBar-submitButton">Create Card</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">

</style>
