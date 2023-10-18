<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <Swarming :swarming-session="swarmingSession"></Swarming>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
</script>
