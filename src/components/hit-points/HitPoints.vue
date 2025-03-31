<script setup lang="ts">
defineProps<{
  amount: number;
}>()
</script>

<template>
  <div class="HitPoints">
    <span class="HitPoints-hp">hp</span>
    <span class="HitPoints-amount">{{ amount }}</span>
  </div>
</template>

<style scoped>

</style>
