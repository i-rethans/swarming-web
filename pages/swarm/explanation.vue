<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <SwarmingExplanation
        :swarming-session="swarmingSession"
      ></SwarmingExplanation>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
</script>
