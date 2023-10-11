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
      :data="timer"
    ></SwarmingInfoLine>
  </div>
</template>

<script setup lang="ts">
const participants = 1;
const timer = ref(10);
const interval = setInterval(() => {
  if (timer.value === 0) {
    clearInterval(interval);
  } else {
    timer.value--;
  }
}, 1000);
</script>

<style lang="scss" scoped>
.swarming-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
