<template>
  <div class="result-container">
    <QuestionTitle :swarming-session="swarmingSession"></QuestionTitle>
    <ResultValue :swarming-session="swarmingSession"></ResultValue>
    <BaseTitle heading-level="1" class="empty">{{ "." }}</BaseTitle>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
</script>

<style lang="scss" scoped>
.result-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
