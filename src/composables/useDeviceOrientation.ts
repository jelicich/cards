import { ref, onMounted, onUnmounted } from 'vue';

declare global {
  interface DeviceOrientationEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
  }
}

export function useDeviceOrientation() {
  const orientation = ref({ alpha: 0, beta: 0, gamma: 0 });
  const granted = ref(false);

  const requestPermission = async (): Promise<boolean> => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await (DeviceOrientationEvent as any).requestPermission();
        granted.value = response === 'granted';
        return granted.value;
      } catch (e) {
        console.error('Permission denied:', e);
        return false;
      }
    } else {
      granted.value = true; // No permission required
      return true;
    }
  };

  let handler: ((e: DeviceOrientationEvent) => void) | null = null;

  onUnmounted(() => {
    if (handler) {
      window.removeEventListener('deviceorientation', handler);
    }
  });

  const startListening = () => {
    handler = (e: DeviceOrientationEvent) => {
      orientation.value = {
        alpha: e.alpha ?? 0,
        beta: e.beta ?? 0,
        gamma: e.gamma ?? 0,
      };
    };
    window.addEventListener('deviceorientation', handler);
  };

  onMounted(async () => {
    const ok = await requestPermission();
    if (ok) startListening();
  });

  return {
    orientation,
    granted,
    requestPermission,
    startListening,
  };
}