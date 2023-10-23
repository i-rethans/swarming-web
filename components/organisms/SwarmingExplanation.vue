<template>
  <div class="swarming">
    <QuestionTitle
      id="swarming-title"
      :swarming-session="swarmingSession"
      :text="$t('explanation.title')"
    ></QuestionTitle>
    <div>
      <Slider
        :swarming-session="swarmingSession"
        :explanation="explanation"
      ></Slider>
    </div>

    <SwarmingInfo
      :swarming-session="swarmingSession"
      :participants="numberOfParticipants"
    ></SwarmingInfo>
    <div v-if="explanation" class="time-explanation">
      <BaseIcon src="time_arrow" class="time-arrow"></BaseIcon>
      <BaseText class="explain">{{ $t("explanation.time") }}</BaseText>
    </div>
    <ButtonBar
      :swarming-session="swarmingSession"
      :button-text="$t('swarming.back')"
      button-target="swarm"
    ></ButtonBar>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { numberOfParticipants } = props.swarmingSession;
const explanation = true;
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
}
.time-explanation {
  position: absolute;
  left: 35vw;
  top: 73vh;
}

.time-arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 25vw;
  // top: 5vh;
  transform: scale(1, -1);
  rotate: -10deg;
}
</style>
