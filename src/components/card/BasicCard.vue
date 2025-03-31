<script setup lang="ts">
import Card from "@/components/card/Card.vue";
import CardHeader from "@/components/card/CardHeader.vue";
import Evolution from "@/components/evolution/Evolution.vue";
import CardPicture from "@/components/card/CardPicture.vue";
import CardAbility from "@/components/card/CardAbility.vue";
import CardPowers from "@/components/card/CardPowers.vue";
import CardFooter from "@/components/card/CardFooter.vue";
import Power from "@/models/Power";
import Energy from "@/models/Energy";

defineProps<{
  evolution: string;
  name: string;
  hitPoints: number;
  energy: Energy,
  evolutionName?: string;
  evolutionImage?: string;
  backgroundPicture: string;
  foregroundPicture?: string;
  abilityTitle?: string;
  abilityDescription?: string;
  powers: Array<Power>;
}>()
</script>

<template>
  <Card>
    <CardHeader
      :evolution="evolution"
      :name="name"
      :hit-points="hitPoints"
      :energy="energy"
    />
    <Evolution
      v-if="evolutionImage && evolutionName"
      :name="evolutionName"
      :image="evolutionImage"
    />
    <CardPicture
      :background="backgroundPicture"
      :foreground="foregroundPicture"
    />
    <CardAbility
      v-if="abilityTitle && abilityDescription"
      :title="abilityTitle"
      :description="abilityDescription"
    />
    <CardPowers
      :powers="powers"
    />
    <CardFooter />
  </Card>
</template>

<style scoped>

</style>
