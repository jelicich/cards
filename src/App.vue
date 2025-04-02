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
  backgroundPicture: 'pikachu-bg.jpg',
  foregroundPicture: 'pikachu-fg.png',
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
<!-- <div class="q a">
  <div class="q b">
  </div>
  <div class="q c">
  </div>
</div> -->
  <Display>
    <div style="width: 400px; height: 600px">
      <BasicCard v-bind="pikachu" />
    </div>
  </Display>
</template>

<style>
body {
  background: rgb(24,24,24);
  background: linear-gradient(229deg, rgba(24,24,24,1) 0%, rgba(62,62,62,1) 33%, rgba(29,29,29,1) 66%, rgba(75,75,75,1) 100%);
}
</style>
