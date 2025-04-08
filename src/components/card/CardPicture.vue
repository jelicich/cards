<script setup lang="ts">
import { computed } from 'vue';
import { useImageUrl } from '@/composables/useImageUrl';

const props = defineProps<{
  backgroundPicture?: string;
  foregroundPicture?: string;
}>();

const { getImageUrl } = useImageUrl();

const backgroundUrl = computed(() => {
  if (!props.backgroundPicture) return '';
  // If it's a blob URL (from file input), use it directly
  if (props.backgroundPicture.startsWith('blob:')) {
    return props.backgroundPicture;
  }
  // Otherwise, use the image URL helper
  return getImageUrl(props.backgroundPicture);
});

const foregroundUrl = computed(() => {
  if (!props.foregroundPicture) return '';
  // If it's a blob URL (from file input), use it directly
  if (props.foregroundPicture.startsWith('blob:')) {
    return props.foregroundPicture;
  }
  // Otherwise, use the image URL helper
  return getImageUrl(props.foregroundPicture);
});
</script>

<template>
  <div class="CardPicture">
    <img 
      v-if="backgroundUrl"
      :src="backgroundUrl" 
      class="CardPicture-background" 
      alt="Pokemon background"
    >
    <img 
      v-if="foregroundUrl" 
      :src="foregroundUrl" 
      class="CardPicture-foreground" 
      alt="Pokemon foreground"
    >
  </div>
</template>

<style lang="scss" scoped>
</style>
