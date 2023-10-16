<template>
  <BaseTitle heading-level="2" class="question-value top">{{
    question
  }}</BaseTitle>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { question } = props.swarmingSession;
</script>

<style lang="scss" scoped>
.question-value {
  margin-bottom: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
