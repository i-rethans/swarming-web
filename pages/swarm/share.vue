<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <Share :swarming-session="swarmingSession"></Share>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
</script>
