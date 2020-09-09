import { ref } from "vue";

export function useToggle() {
  const isVisible = ref(true);

  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };

  return {
    isVisible,
    toggleVisibility,
  };
}
