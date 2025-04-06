<script setup lang="ts">
import EnergyIcon from "@/components/energy-icon/EnergyIcon.vue";
import Energy from "@/models/Energy";
import type Power from "@/models/Power";

defineProps<{
  powers: Array<Power>;
}>()

const getEnergies = (energies: Array<Energy>) => {
  const maxEnergies = 4;
  const diff = maxEnergies - energies.length;
  const placeholders = Array.from(Array(diff));
  const newEnergies = [...energies];
  newEnergies.push(...placeholders);
  return newEnergies;
}
</script>

<template>
  <div class="CardPowers">
    <ul class="CardPowers-list">
      <li
        class="CardPowers-listItem"
        v-for="power, i in powers"
        :key="i"
      >
        <div class="CardPowers-itemRow">
          <div class="CardPowers-energyWrapper">
            <EnergyIcon
              v-for="energy, i in getEnergies(power.energies)"
              :key="i"
              :type="energy || 'NEUTRAL'"
              :class="{'CardPowers-energyPlaceholder': !energy}"
              size="25%"
            />
          </div>
          <h3 class="CardPowers-name">
            {{ power.name }}
          </h3>
          <span class="CardPowers-points">
            {{ power.points }}
          </span>
        </div>
        <p
          v-if="power.description"
          class="CardPowers-description"
          v-html="power.description"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
