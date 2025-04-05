<script setup lang="ts">
import { useImageUrl } from '@/composables/useImageUrl';

const { getImageUrl } = useImageUrl();

defineProps<{
  image: string;
  name: string;
  evolution: number;
}>()
</script>

<template>
  <div class="Evolution">
    <div class="Evolution-pictureWrapper">
      <div class="Evolution-frameWrapper">
        <img class="Evolution-frame" :src="getImageUrl('octagon.svg')" />
        <div class="Evolution-frameInnerShadowMask">
          <img class="Evolution-frameInnerShadowDark" :src="getImageUrl('octagon.svg')" />
          <img class="Evolution-frameInnerShadowLight" :src="getImageUrl('octagon.svg')" />
        </div>
      </div>
      <div class="Evolution-imageWrapper">
        <img class="Evolution-image" :src="getImageUrl(`${image}`)" />

      </div>
      <div class="Evolution-pictureBackground"></div>
      <img class="Evolution-fullShadow" :src="getImageUrl('octagon.svg')" />
    </div>
    <div class="Evolution-nameWrapper">
      <span class="Evolution-name">
        Evolves from {{ name }}
      </span>
      <div :class="`Evolution-nameBox Evolution-nameBox--evolution${evolution}`"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
