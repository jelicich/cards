<script setup lang="ts">
import BasicCard from "@/components/card/BasicCard.vue";
import Energy from "@/models/Energy";
import CardStyle from "@/models/CardStyle";
import Display from "@/components/display/Display.vue";
import ExCard from "@/components/card/ExCard.vue";
import { useImageUrl } from '@/composables/useImageUrl';
import '@/styles/index.scss';

const { getImageUrl } = useImageUrl();

const charizard = {
  evolution: 0,
  name: 'Charizard',
  hitPoints: 180,
  energy: Energy.FIRE,
  backgroundPicture: 'charizard/background.png',
  // abilityTitle: 'Queja',
  // abilityDescription: 'Si el otro pokemon es bueno, se queja. Cuando se queja hace una gran queja quejosa. La gran queja es una gran abilidad pokemonica.',
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

const pikachu = {
  evolution: 0,
  name: 'Pikachu',
  hitPoints: 120,
  energy: Energy.NEUTRAL,
  backgroundPicture: 'pikachu-bg.jpg',
  foregroundPicture: 'pikachu-fg.png',
  abilityTitle: 'Queja',
  abilityDescription: 'Si el otro pokemon es bueno, se queja. Cuando se queja hace una gran queja quejosa. La gran queja es una gran abilidad pokemonica.',
  powers: [{
    energies: [Energy.DARKNESS],
    name: 'Gnaw',
    points: 20,
  }],
  weakness: {
    energy: Energy.FIGHTING,
    amount: 20
  },
  retreat: [Energy.NEUTRAL],
  artist: 'Mitushiro Arita',
  info: 'When angry, it inmediately releases the energy stored in its cheeks and everyone dies',
  cardStyle: CardStyle.BASIC,
}

const yiki = {
  evolution: 0,
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
  info: 'When dealing with sarasa, becomes sarlanga and the world crushes',
  cardStyle: CardStyle.BASIC,
}

const moreData = {
  evolution: 2,
  name: 'Wiki',
  hitPoints: 180,
  energy: Energy.FIGHTING,
  evolvesFrom: {
    name: 'Yiki',
    image: 'pikachu.webp'
  },
  backgroundPicture: 'pikachu.webp',
  abilityTitle: 'Queja',
  abilityDescription: 'Si el otro pokemon es bueno, se queja. Cuando se queja hace una gran queja quejosa. La gran queja es una gran abilidad pokemonica.',
  powers: [{
    energies: [Energy.FIRE],
    name: 'Procastina',
    points: null,
  }, {
    energies: [Energy.FIRE, Energy.FIRE, Energy.FIRE, Energy.NEUTRAL],
    name: 'Usa IA',
    points: 40,
  }],
  weakness: {
    energy: Energy.WATER,
    amount: 20
  },
  retreat: [Energy.NEUTRAL],
  artist: 'Sakito Nakamara',
  info: 'When dealing with sarasa, becomes sarlanga and the world crushes',
  cardStyle: CardStyle.FOIL,
}

// const charizardBaseAssetsLength = [0, 1, 2, 3, 4];
// const charizardBlendAssetsLength = [5, 6, 7];
const charizardAssetsLength = Array.from(Array(8));
</script>

<template>
  <div style="padding-top: 50px">
    <Display>
      <div style="width: 400px; height: 600px">
        <BasicCard v-if="false" v-bind="pikachu" />
        <ExCard v-else v-bind="charizard" class="Charizard">
          <img
            v-for="asset, i in charizardAssetsLength"
            :key="i"
            :class="`Charizard-${i}`"
            :src="getImageUrl(`charizard/${i}.png`)"
          />
        </ExCard>
      </div>
    </Display>

  </div>
</template>

<style>
body {
  background: rgb(24,24,24);
  background: linear-gradient(229deg, rgba(24,24,24,1) 0%, rgba(62,62,62,1) 33%, rgba(29,29,29,1) 66%, rgba(75,75,75,1) 100%);
}
</style>
