<template>
  <div class="swarming">
    <QuestionTitle
      id="swarming-title"
      :swarming-session="swarmingSession"
      :text="question"
    ></QuestionTitle>
    <Slider :swarming-session="swarmingSession"></Slider>
    <SwarmingInfo
      :swarming-session="swarmingSession"
      :participants="numberOfParticipants"
    ></SwarmingInfo>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { numberOfParticipants, question } = props.swarmingSession;
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25vh;
}
</style>
