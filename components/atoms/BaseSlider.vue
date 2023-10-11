<template>
  <div class="base-slider">
    <input
      class="slider"
      type="range"
      :min="minValue"
      :max="maxValue"
      :value="modelValue"
      :step="0.01"
      :disabled="true"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  minValue: number;
  maxValue: number;
  modelValue: number;
}>();

const emits = defineEmits<{
  "update:modelValue": [value: number];
}>();

const sliderValue = ref(0);
const updateValue = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  sliderValue.value = parseInt(inputValue);
  emits("update:modelValue", parseInt(inputValue));
};
</script>

<style lang="scss" scoped>
.base-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  width: 50%;
  padding: 1rem 1.5rem;
  appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 15px;
  background: $off-white;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 35px;
  border-radius: 25%;
  background: $secondary;
  cursor: pointer;
}

// .slider::-moz-range-thumb {
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   background: $primary;
//   cursor: pointer;
// }
</style>
