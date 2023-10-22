<template>
  <div class="swarming">
    <QuestionTitle
      id="swarming-title"
      :swarming-session="swarmingSession"
      :text="$t('explanation.title')"
    ></QuestionTitle>
    <div>
      <Slider :swarming-session="swarmingSession"></Slider>
    </div>

    <SwarmingInfo
      :swarming-session="swarmingSession"
      :participants="numberOfParticipants"
    ></SwarmingInfo>
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
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
}
</style>
