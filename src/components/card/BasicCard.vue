<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/card/Card.vue";
import CardHeader from "@/components/card/CardHeader.vue";
import Evolution from "@/components/evolution/Evolution.vue";
import CardPicture from "@/components/card/CardPicture.vue";
import CardAbility from "@/components/card/CardAbility.vue";
import CardPowers from "@/components/card/CardPowers.vue";
import CardFooter from "@/components/card/CardFooter.vue";
import Energy from "@/models/Energy";
import CardStyle from "@/models/CardStyle";
import type Power from "@/models/Power";

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
  cardStyle: CardStyle;
}>()

const energyClass = computed(() => {
  return props.energy.toLowerCase();
});
const styleClass = computed(() => {
  return props.cardStyle.toLowerCase();
});
// const energyClass = props.energy.toLowerCase();
// const styleClass = props.cardStyle.toLowerCase();
</script>

<template>
  <Card :class="`Card--${energyClass} Card--${styleClass}`">
    <CardHeader
      :evolution="evolution"
      :name="name"
      :hit-points="hitPoints"
      :energy="energy"
    />
    <Evolution
      v-if="evolvesFrom"
      :name="evolvesFrom.name || ''"
      :image="evolvesFrom.image || ''"
      :evolution="evolution"
    />
    <CardPicture
      :backgroundPicture="backgroundPicture"
      :foregroundPicture="foregroundPicture"
    />
    <CardAbility
      v-if="abilityTitle && abilityDescription"
      :title="abilityTitle"
      :description="abilityDescription"
    />
    <CardPowers
      :powers="powers"
    />
    <CardFooter
      :weakness="weakness"
      :retreat="retreat"
      :artist="artist"
      :info="info"
    />
  </Card>
</template>

<style scoped>

</style>
