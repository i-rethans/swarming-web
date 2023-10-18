<template>
  <div class="slider">
    <BaseTitle class="centered">{{ Math.round(currentValue) }}</BaseTitle>

    <div class="slider-buttons">
      <BaseSlider
        v-model="currentValue"
        :min-value="minValue"
        :max-value="maxValue"
      ></BaseSlider>
      <BaseToggle :swarming-session="swarmingSession"></BaseToggle>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { currentValue } = props.swarmingSession;
const minValue = 0;
const maxValue = 20;
</script>

<style lang="scss" scoped>
.slider-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.scale {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
