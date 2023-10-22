<template>
  <div class="slider">
    <div v-if="explanation" class="decision-explanation">
      <BaseText class="explain">{{
        $t("explanation.group-decision")
      }}</BaseText>
      <BaseIcon class="decision-arrow" src="ic_curved_right"></BaseIcon>
    </div>
    <BaseTitle id="start" class="centered">{{
      Math.round(currentValue)
    }}</BaseTitle>

    <div id="end" class="slider-buttons">
      <BaseSlider
        v-model="currentValue"
        :min-value="minValue"
        :max-value="maxValue"
      ></BaseSlider>
      <BaseToggle :swarming-session="swarmingSession"></BaseToggle>
      <div v-if="explanation" class="toggle-explanation">
        <BaseIcon src="ic_curved_left"></BaseIcon>
        <BaseText class="explain">{{ $t("explanation.toggle") }}</BaseText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import LeaderLine from "leader-line-vue";
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
  explanation: boolean;
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

.toggle-explanation {
  position: absolute;
  left: 70vw;
  top: 50vh;
}

.decision-explanation {
  position: absolute;
  left: 20vw;
  top: 20vh;
}

.decision-arrow {
  position: absolute;
  left: 25vw;
  top: 3vh;
}

.scale {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
