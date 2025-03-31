const images = import.meta.glob('@/assets/**/*', { eager: true });

export function useImageUrl() {
  const getImageUrl = (imageName: string) => {
    if (!imageName) return '';
    const path = `/src/assets/${imageName}`;
    return images[path]?.default || ''; // Returns the resolved image path
  };

  return { getImageUrl };
}