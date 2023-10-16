<template>
  <div class="slider centered">
    <BaseTitle class="centered">{{ Math.round(currentValue) }}</BaseTitle>

    <div class="slider-buttons">
      <BaseButton
        class="swarm arrow-button left-arrow"
        :class="{ flash: leftActive }"
        @click="decrease"
      ></BaseButton>
      <BaseSlider
        v-model="currentValue"
        :min-value="minValue"
        :max-value="maxValue"
      ></BaseSlider>
      <BaseButton
        class="swarm arrow-button right-arrow"
        :class="{ flash: rightActive }"
        @click="increase"
      ></BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { changeDirection, currentValue } = props.swarmingSession;
const minValue = 0;
const maxValue = 20;

const rightActive = ref(false);
const leftActive = ref(false);

const decrease = () => {
  !leftActive.value ? changeDirection("left") : null;

  leftActive.value = true;
  rightActive.value = false;
};

const increase = () => {
  !rightActive.value ? changeDirection("right") : null;

  rightActive.value = true;
  leftActive.value = false;
};
</script>

<style lang="scss" scoped>
// .slider {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 12px;
// }
.slider-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 0px;
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
