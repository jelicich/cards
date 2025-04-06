<script setup lang="ts">
import BasicCard from "@/components/card/BasicCard.vue";
import type Power from "@/models/Power";
import Energy from "@/models/Energy";
import CardStyle from "@/models/CardStyle";

const props = defineProps<{
  evolution: number;
  name: string;
  hitPoints: number;
  energy: Energy,
  evolvesFrom?: {
    name?: string;
    image?: string;
  },
  backgroundPicture: string;
  foregroundPicture?: string;
  abilityTitle?: string;
  abilityDescription?: string;
  powers: Array<Power>;
  weakness: { energy: Energy, amount: number};
  retreat: Array<Energy>;
  artist: string;
  info: string;
  // cardStyle: CardStyle;
}>()
</script>

<template>
  <div class="ExCard">
    <BasicCard v-bind="props" :card-style="CardStyle.FOIL"/>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
