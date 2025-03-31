<script setup lang="ts">
import { useImageUrl } from '@/composables/useImageUrl';

const { getImageUrl } = useImageUrl();

defineProps<{
  image: string;
  name: string;
}>()
</script>

<template>
  <div class="Evolution">
    <div class="Evolution-pictureWrapper">
      <img :src="getImageUrl(`${image}`)" />
      <span class="Evolution-nameWrapper">
        <span class="Evolution-name">
          {{ name }}
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
