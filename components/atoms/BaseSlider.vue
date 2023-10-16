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
  </div>
</template>

<script setup lang="ts">
defineProps<{
  minValue: number;
  maxValue: number;
  modelValue: number;
}>();
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
  height: 5px;
  background: $off-white;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 25%;
  background: $secondary;
  cursor: pointer;
}
</style>
