<template>
  <div v-if="sessionState" class="swarming">
    <QuestionTitle
      id="swarming-title"
      :swarming-session="swarmingSession"
      :text="sessionState?.question ? sessionState?.question : ''"
    ></QuestionTitle>
    <Slider :swarming-session="swarmingSession" :explanation="false"></Slider>
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
const { numberOfParticipants, sessionState } = props.swarmingSession;
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15vh;
}
</style>
