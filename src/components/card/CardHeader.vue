<script setup lang="ts">
import Pill from "@/components/pill/Pill.vue";
import HitPoints from "@/components/hit-points/HitPoints.vue";
import EnergyIcon from "@/components/energy-icon/EnergyIcon.vue";
import Energy from "@/models/Energy";

defineProps<{
  evolution: number;
  name: string;
  energy: Energy;
  hitPoints: number;
}>()

</script>

<template>
  <div class="CardHeader">
    <Pill class="Pill--uppercase Pill--italic">
      <template v-if="evolution">
        stage <span class="CardHeader-stage">{{ evolution }}</span>
      </template>
      <template v-else>
        basic
      </template>
    </Pill>
    <h1 class="CardHeader-title">{{ name }}</h1>
    <HitPoints :amount="hitPoints" />
    <EnergyIcon :type="energy" size="8%"/>
  </div>
</template>

<style scoped>

</style>
