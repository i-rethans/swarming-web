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
    />
    <!-- <div class="slider-value" :style="{ left: valuePosition + 'vw' }">
      {{ modelValue }}
    </div> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  minValue: number;
  maxValue: number;
  modelValue: number;
}>();

// const valuePosition = computed(() => {
//   // Calculate the position of the value element based on modelValue, minValue, and maxValue.
//   const percent = props.modelValue / 20;
//   return percent * 62 + 15;
// });
</script>

<style lang="scss" scoped>
.base-slider {
  width: 70vw;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  appearance: none;
  width: 100%;
  height: 20px;
  border-radius: 20px;
  background: $off-white;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background: $secondary;
  cursor: pointer;
  z-index: 2;
}

// .slider-value {
//   position: absolute;
//   width: 8vw;
//   height: 8vw;
//   border-radius: 50%;
//   font-size: 6vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: $off-white;
//   z-index: 3; /* Ensure it's above the thumb */
//   top: 50vh;
//   left: 0;
// }
</style>
