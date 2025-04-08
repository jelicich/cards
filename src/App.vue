<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Charizard from "@/components/characters/Charizard.vue";
import BasicCard from "@/components/card/BasicCard.vue";
import Energy from "@/models/Energy";
import CardStyle from "@/models/CardStyle";
import Display from "@/components/display/Display.vue";
import SideBar from "@/components/side-bar/SideBar.vue";
import type { CardForm } from '@/models/CardForm';
import '@/styles/index.scss';

const showBuilder = ref<boolean>(false);
const card = ref<CardForm | null>(null);
card.value = {
  evolution: 0,
  name: 'Pikachu',
  hitPoints: 60,
  energy: Energy.LIGHTNING,
  backgroundPicture: 'pikachu.png',
  powers: [{name: 'Gnaw', points: 20, energies: [Energy.LIGHTNING]}],
  weakness: { energy: Energy.FIGHTING, amount: 20 },
  retreat: [Energy.NEUTRAL],
  artist: 'Illus. Mitushiro Arita',
  info: 'When it is angered, it immediatly discharges the energy stored in the pouches in its cheeks.',
  cardStyle: CardStyle.BASIC,
}

function handleCardSubmit(data: CardForm) {
  console.log(data);
  card.value = data;
}

function toggleView() {
  showBuilder.value = !showBuilder.value;
}

</script>

<template>
  <div class="AppContent">
    <div class="AppStage" v-if="!showBuilder">
      <Charizard class="Charizard"/>
      <button class="AppStage-cta" @click="toggleView">Build your basic card!</button>
    </div>
    <template v-else>
      <SideBar @submit="handleCardSubmit" />
  
      <div class="AppStage" style="padding-top: 50px">
        <Display>
          <div style="width: 400px; height: 600px">
            <BasicCard v-if="card" v-bind="card" />
          </div>
        </Display>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
body {
  background: rgb(24,24,24);
  background: linear-gradient(229deg, rgba(24,24,24,1) 0%, rgba(62,62,62,1) 33%, rgba(29,29,29,1) 66%, rgba(75,75,75,1) 100%);
}

.AppContent {
  display: flex;

  .Charizard {
    padding: 80px 0 50px;
    margin: auto;
  }
}

.AppStage {
  flex: 1;

  &-cta {
    display: block;
    margin: auto;
    padding: 0.75em 1.5em;
    background-color: #ff6b00;         /* Bold highlight color (orange) */
    color: #fff;                       /* White text for contrast */
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 8px 20px rgba(255, 107, 0, 0.3); /* Glowy shadow */
  }

  &-cta:hover {
    background-color: #ff8126;         /* Slightly lighter on hover */
    transform: scale(1.05);            /* Subtle grow effect */
  }

  &-cta:active {
    transform: scale(0.98);            /* Press-down effect */
  }

  &-cta:focus-visible {
    outline: 3px solid #ffd8b0;        /* Accessible focus style */
    outline-offset: 3px;
  }
}
</style>
