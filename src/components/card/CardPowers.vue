<script setup lang="ts">
import Power from "@/models/Power";
import EnergyIcon from "@/components/energy-icon/EnergyIcon.vue";

defineProps<{
  powers: Array<Power>;
}>()
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
              v-for="energy, i in power.energies"
              :key="i"
              :type="energy"
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
