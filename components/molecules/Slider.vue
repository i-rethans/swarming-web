<template>
  <div class="slider">
    <BaseLabel class="value-label">{{ "test" }}</BaseLabel>
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

.arrow-button {
  width: 30px; /* Adjust the button width as needed */
  height: 30px; /* Adjust the button height as needed */
  border: none;
  background: transparent;
  position: relative;
  cursor: pointer;
  padding: 0;

  .arrow-left,
  .arrow-right {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
  }

  .arrow-left {
    border-width: 15px 15px 15px 0;
    border-color: transparent #007bff transparent transparent;
    left: 0;
  }

  .arrow-right {
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #007bff;
    right: 0;
  }
}
</style>
