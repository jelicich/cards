<script setup lang="ts">
import BasicCard from '@/components/card/BasicCard.vue'
import Energy from "@/models/Energy";
import '@/styles/index.scss';

const pikachu = {
  evolution: 'basic',
  name: 'Pikachu',
  hitPoints: 120,
  energy: Energy.LIGHTNING,
  backgroundPicture: 'pikachu.webp',
  powers: [{
    energies: [Energy.LIGHTNING],
    name: 'Gnaw',
    points: 20,
  }]
}
</script>

<template>
  <div style="width: 400px; height: 600px">
    <BasicCard v-bind="pikachu" />
  </div>
</template>

<style scoped>
</style>
