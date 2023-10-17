<template>
  <div class="result-container">
    <QuestionTitle :swarming-session="swarmingSession"></QuestionTitle>
    <ResultValue :swarming-session="swarmingSession"></ResultValue>
    <BaseButton class="purple" @click="toHome">{{
      $t("result.home")
    }}</BaseButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const toHome = () => {
  const router = useRouter();
  const localePath = useLocalePath();
  router.push(localePath({ name: "index" }));
};
</script>

<style lang="scss" scoped>
.result-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
