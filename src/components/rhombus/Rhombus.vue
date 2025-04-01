<script setup lang="ts">
interface Props {
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: '100%'
})

</script>

<template>
  <div class="Rhombus" :style="`width: ${size}`">
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="897 641 482 782">
      <g id="Layer 1">
        <path fill="#000000" fill-rule="evenodd" class="Rhombus-outter" d="m1379 1032l-241 391-241-391 241-391z"/>
        <path fill="url(#gradient-fill)" fill-rule="evenodd" class="Rhombus-inner" d="m1335.4 1032l-196.9 319.5-196.9-319.5 196.9-319.5z"/>
      </g>
      <defs>
        <linearGradient id="gradient-fill" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#e6e6e6" />
          <stop offset="0.14285714285714285" stop-color="#d4d4d4" />
          <stop offset="0.2857142857142857" stop-color="#c2c2c2" />
          <stop offset="0.42857142857142855" stop-color="#b0b0b0" />
          <stop offset="0.5714285714285714" stop-color="#b0b0b0" />
          <stop offset="0.7142857142857143" stop-color="#c2c2c2" />
          <stop offset="0.8571428571428571" stop-color="#d4d4d4" />
          <stop offset="1" stop-color="#e6e6e6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>

</style>
