<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const hasMouse = ref(true);
const x = ref(window.innerWidth / 2);
const y = ref(window.innerHeight / 2);
const area = ref(null);

function updatePointer(event) {
  x.value = event.clientX;
  y.value = event.clientY;
}

onMounted(() => {
  area.value.addEventListener("pointermove", updatePointer, true)
  area.value.firstElementChild.classList.add('Display-target');
});
onUnmounted(() => area.value.removeEventListener("pointermove", updatePointer));

const coordinates = computed(() => {
  if (!area.value) return {};
  const rect = area.value.getBoundingClientRect();
  // const rX = x.value - rect.left;
  // const rY = y.value - rect.top;
  // Relative position inside the element
  const rX = x.value - (rect.left + rect.width / 2); // Centered X
  const rY = y.value - (rect.top + rect.height / 2); // Centered Y
  const pX = rX / rect.width;
  const pY = rY / rect.height;
  const spX = Math.min(Math.max(pX, 0), 1);
  const spY = Math.min(Math.max(pY, 0), 1);
  // const aX = x.value / innerWidth * 2;
  // const aY = y.value / innerHeight * 2;
  // Normalize (-1 to 1)
  const aX = rX / (rect.width / 2);
  const aY = rY / (rect.height / 2);

  return {
    "--x": `${pX * 100}%`,
    "--y": `${pY * 100}%`,
    "--sx": `${spX * 100}%`,
    "--sy": `${spY * 100}%`,
    // "--rx": `${-40 * aY + 20}deg`,
    // "--ry": `${40 * aX - 20}deg`
    "--rx": `${-40 * aY}deg`,
    "--ry": `${40 * aX}deg`
  };
});
</script>

<template>
  <div class="Display" :style="coordinates" ref="area">
    <slot></slot>
  </div>
</template>