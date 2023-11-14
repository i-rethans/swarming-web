<template>
  <div v-if="sessionState" class="result-value">
    <BaseText class="text-extra-extra-large centered result">{{
      Math.round(sessionState.value)
    }}</BaseText>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { sessionState } = props.swarmingSession;
</script>

<style lang="scss" scoped>
.result-value {
  height: 10vw;
  width: 10vw;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
