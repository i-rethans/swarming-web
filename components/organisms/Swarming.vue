<template>
  <div class="swarming">
    <BaseText class="centered-block">{{ question }}</BaseText>
    <Slider :swarming-session="swarmingSession"></Slider>
    <BaseButton class="question" @click="start">
      {{ $t("swarming.start-session") }}
    </BaseButton>
    <SwarmingInfo></SwarmingInfo>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question?: string;
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { startSwarming } = props.swarmingSession;

const start = () => {
  startSwarming();
};
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
