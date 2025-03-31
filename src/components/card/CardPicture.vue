<script setup lang="ts">
import { useImageUrl } from '@/composables/useImageUrl';

const { getImageUrl } = useImageUrl();

defineProps<{
  background: string;
  foreground?: string;
}>()

</script>

<template>
  <div class="CardPicture">
    <img class="CardPicture-background" :src="getImageUrl(background)" />
    <img class="CardPicture-foreground" v-if="foreground" :src="getImageUrl(foreground)" />
  </div>
</template>

<style scoped>

</style>
