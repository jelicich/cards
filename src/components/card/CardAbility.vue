<script setup lang="ts">
import Pill from "@/components/pill/Pill.vue";
import HitPoints from "@/components/hit-points/HitPoints.vue";
defineProps<{
  title: string;
  description: string;
}>()
</script>

<template>
  <article class="CardAbility">
    <div class="CardAbility-heading">
      <Pill>Avility</Pill>
      <h1>{{ title }}</h1>
    </div>
    <p v-html="description" />
  </article>
</template>

<style scoped>

</style>
