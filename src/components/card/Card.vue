<script setup lang="ts">
defineProps<{

}>()
</script>

<template>
  <div class="Card">
    <div class="Card-innerBackground">
    </div>
    <div class="Card-content">
      <slot></slot>
    </div>
    <!-- <div class="Card-glare">
    </div> -->
    <!-- <div class="Card-foil">
    </div> -->
  </div>
</template>

<style scoped>

</style>
