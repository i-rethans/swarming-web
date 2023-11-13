<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <WaitingRoom
        v-if="sessionState?.question"
        :swarming-session="swarmingSession"
      ></WaitingRoom>
      <SessionInput v-else :swarming-session="swarmingSession"></SessionInput>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const { sessionState } = props.swarmingSession;
</script>
