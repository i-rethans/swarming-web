<template>
  <div class="slider centered">
    <BaseTitle class="centered">{{ currentValue }}</BaseTitle>
    <BaseSlider
      v-model="currentValue"
      :min-value="minValue"
      :max-value="maxValue"
    ></BaseSlider>
    <div class="scale">
      <BaseText> {{ minValue }}</BaseText>
      <BaseText> {{ maxValue }}</BaseText>
    </div>
    <div class="buttons">
      <BaseButton
        class="swarm"
        :class="{ flash: leftActive }"
        icon="ic-arrow-left"
        @click="decrease"
      ></BaseButton>
      <BaseButton
        class="swarm"
        :class="{ flash: rightActive }"
        icon="ic-arrow-right"
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
.slider {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.scale {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
