<template>
  <div class="swarming-info">
    <SwarmingInfoLine
      icon-src="ic_participants"
      :item-name="$t('swarming.active-participants')"
      :data="participants"
    ></SwarmingInfoLine>
    <SwarmingInfoLine
      icon-src="ic_clock"
      :item-name="$t('swarming.time-remaining')"
      :data="toTime(sessionState?.swarming_time)"
    ></SwarmingInfoLine>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  participants: number;
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const { sessionState } = props.swarmingSession;

const toTime = (time: number | undefined) => {
  if (!time) return 0;
  const minutes = Math.floor(time / 60000);
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.ceil((time % 60000) / 1000);
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutesString}:${secondsString}`;
};
</script>

<style lang="scss" scoped>
.swarming-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 80vw;
}
</style>
