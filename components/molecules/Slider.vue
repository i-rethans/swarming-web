<template>
  <div v-if="sessionState" class="slider">
    <div v-if="explanation" class="decision-explanation">
      <BaseText class="explain">{{
        $t("explanation.group-decision")
      }}</BaseText>
      <BaseIcon class="group-arrow" src="group_arrow"></BaseIcon>
    </div>
    <BaseTitle id="start" class="centered">{{
      Math.round(sessionState?.value)
    }}</BaseTitle>

    <div id="end" class="slider-buttons">
      <BaseSlider
        v-model="sessionState.value"
        :min-value="minValue"
        :max-value="maxValue"
      ></BaseSlider>
      <BaseToggle
        :explanation="explanation"
        :swarming-session="swarmingSession"
      ></BaseToggle>
      <div v-if="explanation" class="toggle-explanation">
        <BaseIcon src="lower_arrow" class="toggle-arrow"></BaseIcon>
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
const { sessionState } = props.swarmingSession;
const minValue = 0;
const maxValue = sessionState.value?.range_max;
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

.group-arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 25vw;
  top: 5vh;
}

.toggle-arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  left: -5vw;
  top: 5vh;
  rotate: -45deg;
}

.scale {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
