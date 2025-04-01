<script setup lang="ts">
import BasicCard from '@/components/card/BasicCard.vue'
import Energy from "@/models/Energy";
import Display from "@/components/display/Display.vue";
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
  }],
  weakness: {
    energy: Energy.FIGHTING,
    amount: 20
  },
  retreat: [Energy.NEUTRAL],
  artist: 'Mitushiro Arita',
  info: 'When angry, it inmediately releases the energy stored in its cheeks and everyone dies'
}

const yiki = {
  evolution: 'basic',
  name: 'Yiki',
  hitPoints: 40,
  energy: Energy.LIGHTNING,
  backgroundPicture: 'asd.png',
  powers: [{
    energies: [Energy.LIGHTNING],
    name: 'Weboneo',
    points: 10,
  }],
  weakness: {
    energy: Energy.FIGHTING,
    amount: 20
  },
  retreat: [Energy.NEUTRAL],
  artist: 'Sakito Nakamara',
  info: 'When dealing with sarasa, becomes sarlanga and the world crushes'
}
</script>

<template>
  <Display>
    <div style="width: 400px; height: 600px">
      <BasicCard v-bind="pikachu" />
    </div>
  </Display>
</template>

<style scoped>
</style>
