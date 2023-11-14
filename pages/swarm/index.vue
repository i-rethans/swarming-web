<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <WaitingRoom
        v-if="!admin || (admin && sessionState?.question)"
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

const { sessionState, admin } = props.swarmingSession;
</script>
