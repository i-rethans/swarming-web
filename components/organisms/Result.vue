<template>
  <div v-if="sessionState" class="result-container">
    <QuestionTitle
      :swarming-session="swarmingSession"
      :text="sessionState?.question ? sessionState?.question : ''"
    ></QuestionTitle>
    <ResultValue :swarming-session="swarmingSession"></ResultValue>
    <div class="result-button-container">
      <BaseButton v-if="admin" class="blue" @click="toNewSession">{{
        $t("result.new")
      }}</BaseButton>
      <BaseButton class="purple" @click="toHome">{{
        $t("result.home")
      }}</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const { sessionState, newSession, admin } = props.swarmingSession;

const toHome = () => {
  const router = useRouter();
  const localePath = useLocalePath();
  router.push(localePath({ name: "index" }));
};

const toNewSession = () => {
  newSession();
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

.result-button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
}
</style>
