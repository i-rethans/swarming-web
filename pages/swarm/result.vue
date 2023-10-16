<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <Result :swarming-session="swarmingSession"></Result>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
</script>
