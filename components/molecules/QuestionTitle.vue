<template>
  <BaseTitle heading-level="2" class="question-value top">{{ text }}</BaseTitle>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
  text: string;
}>();
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
