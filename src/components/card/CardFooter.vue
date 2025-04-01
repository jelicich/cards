<script setup lang="ts">
import Pill from "@/components/pill/Pill.vue";
import EnergyIcon from "@/components/energy-icon/EnergyIcon.vue";
import Energy from "@/models/Energy";
import Rhombus from "@/components/rhombus/Rhombus.vue";

defineProps<{
  weakness: { energy: Energy, amount: number};
  retreat: Array<Energy>;
  artist: string;
  info: string;
}>()
</script>

<template>
  <div class="CardFooter">
    <div class="CardFooter-row">
      <Pill class="Pill--full">
        <span class="CardFooter-pillText">
          weakness
        </span>
        <EnergyIcon
          :type="weakness.energy"
          size="10%"
        />
        +{{ weakness.amount }}
      </Pill>
      <Pill class="Pill--full">
        <span class="CardFooter-pillText">
          retreat
        </span>
        <EnergyIcon
          v-for="energy, i in retreat"
          :key="i"
          :type="energy"
          size="10%"
        />
      </Pill>
    </div>
    <div class="CardFooter-row">
      <div class="CardFooter-col">
        <p class="CardFooter-artist">Illus. {{ artist }}</p>
        <Rhombus size="10%" />
      </div>
      <div class="CardFooter-col">
        <p class="CardFooter-info">
          {{ info }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
