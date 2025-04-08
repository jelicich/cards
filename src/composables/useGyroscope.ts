// src/composables/useGyroscope.ts
import { ref, onMounted, onUnmounted } from 'vue';



export function useGyroscope() {
  const rotation = ref({ alpha: 0, beta: 0, gamma: 0 });
  const granted = ref(false);
  const handler: ((e: DeviceMotionEvent) => void) | null = null;

  onUnmounted(() => {
    if (handler) {
      window.removeEventListener('devicemotion', handler);
    }
  });

  const requestPermission = async (): Promise<boolean> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dmEvent = window.DeviceMotionEvent as any;
    if (typeof dmEvent?.requestPermission === 'function') {
      try {
        const response = await dmEvent.requestPermission();
        granted.value = response === 'granted';
        return granted.value;
      } catch (e) {
        console.error('Permission denied:', e);
        return false;
      }
    } else {
      // Browsers that don't need permission
      granted.value = true;
      return true;
    }
  };

  const startListening = () => {
    const handler = (e: DeviceMotionEvent) => {
      const r = e.rotationRate;
      if (r) {
        rotation.value = {
          alpha: r.alpha || 0,
          beta: r.beta || 0,
          gamma: r.gamma || 0
        };
      }
    };
    window.addEventListener('devicemotion', handler);
  };

  onMounted(async () => {
    const ok = await requestPermission();
    if (ok) startListening();
  });

  return { rotation, granted };
}