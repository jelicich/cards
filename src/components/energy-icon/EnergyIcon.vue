<script setup lang="ts">
import Energy from "@/models/Energy";
import { useImageUrl } from '@/composables/useImageUrl';

const { getImageUrl } = useImageUrl();

interface Props {
  type: Energy;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: '100%'
})

</script>

<template>
  <span
    class="EnergyIcon"
    :style="`width: ${size}; height: ${size}`"
  >
    <img
      class="EnergyIcon-image"
      :src="getImageUrl(`energy/${type.toLowerCase()}.svg`)"
    />
  </span>
</template>

<style scoped>

</style>
