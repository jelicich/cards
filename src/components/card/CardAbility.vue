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
      <div class="CardAbility-pillWrapper">
        <Pill class="Pill--full Pill--ability">Ability</Pill>
      </div>
      <h1 class="CardAbility-title">{{ title }}</h1>
    </div>
    <p class="CardAbility-description" v-html="description" />
  </article>
</template>

<style scoped>

</style>
