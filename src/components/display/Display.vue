<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const hasMouse = ref(true);
const x = ref(240);
const y = ref(160);
const area = ref(null);

function updatePointer(event) {
  x.value = event.clientX;
  y.value = event.clientY;
}

onMounted(() => area.value.addEventListener("pointermove", updatePointer, true));
onUnmounted(() => area.value.removeEventListener("pointermove", updatePointer));
console.log(area);
const coordinates = computed(() => {
  if (!area.value) return {};
  const rect = area.value.getBoundingClientRect();
  const rX = x.value - rect.left;
  const rY = y.value - rect.top;
  const pX = rX / rect.width;
  const pY = rY / rect.height;
  const spX = Math.min(Math.max(pX, 0), 1);
  const spY = Math.min(Math.max(pY, 0), 1);
  const aX = x.value / innerWidth;
  const aY = y.value / innerHeight;
  return {
    "--x": `${pX * 100}%`,
    "--y": `${pY * 100}%`,
    "--sx": `${spX * 100}%`,
    "--sy": `${spY * 100}%`,
    "--rx": `${-40 * aY + 20}deg`,
    "--ry": `${40 * aX - 20}deg`
  };
});
</script>

<template>
  <div class="Display" :style="coordinates" ref="area">
    <slot></slot>
  </div>
</template>