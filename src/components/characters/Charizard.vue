<script setup>
import Display from "@/components/display/Display.vue";
import ExCard from "@/components/card/ExCard.vue";
import Energy from "@/models/Energy";
import { useImageUrl } from '@/composables/useImageUrl';

const { getImageUrl } = useImageUrl();

const charizard = {
  evolution: 2,
  name: 'Charizard',
  hitPoints: 180,
  energy: Energy.FIRE,
  backgroundPicture: 'charizard/background.png',
  powers: [{
    energies: [Energy.FIRE, Energy.NEUTRAL, Energy.NEUTRAL],
    name: 'Slash',
    points: 60,
  },
  {
    energies: [Energy.FIRE, Energy.FIRE, Energy.NEUTRAL, Energy.NEUTRAL],
    name: 'Crimson Storm',
    description: 'Discard two energies from this pokemon',
    points: 200,
  }],
  weakness: {
    energy: Energy.WATER,
    amount: 20
  },
  retreat: [Energy.NEUTRAL, Energy.NEUTRAL],
  artist: 'PLANETA Mochizuki',
  info: 'When your Pokemon ex is knowcked out, your opponent gets 2 points.'
}

const charizardAssetsLength = Array.from(Array(8));

</script>
<template>
  <Display>
    <div style="width: 400px; height: 600px">
      <ExCard v-bind="charizard" class="Charizard">
        <img
          v-for="asset, i in charizardAssetsLength"
          :key="i"
          :class="`Charizard-${i}`"
          :src="getImageUrl(`charizard/${i}.png`)"
        />
      </ExCard>
    </div>
  </Display>
</template>