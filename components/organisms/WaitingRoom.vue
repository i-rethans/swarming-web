<template>
  <div class="swarming">
    <QuestionTitle :swarming-session="swarmingSession"></QuestionTitle>
    <div class="swarming-middle">
      <BaseButton
        v-if="startedStateAndAdmin()"
        class="purple"
        :swarming-session="swarmingSession"
        @click="start"
      >
        {{ $t("swarming.start-session") }}
      </BaseButton>

      <BaseText v-else class="centered-block text-large italic bold">{{
        $t("swarming.waiting-for-participants")
      }}</BaseText>
      <SwarmingInfo
        :swarming-session="swarmingSession"
        :participants="numberOfParticipants"
      ></SwarmingInfo>
    </div>
    <ButtonBar
      :swarming-session="swarmingSession"
      :button-text="$t('swarming.how-to')"
      button-target="swarm-explanation"
    ></ButtonBar>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { numberOfParticipants, state, admin, startSwarming } =
  props.swarmingSession;

const startedStateAndAdmin = () => {
  console.log(state.value, admin.value);
  return state.value == "started" && admin.value;
};

const start = () => {
  startSwarming();

  const route = useRoute();

  const router = useRouter();
  const localePath = useLocalePath();

  router.push(
    localePath({ name: "swarm-session", query: { id: route.query.id } }),
  );
};
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25vh;
}

.swarming-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 25vh;
}
</style>
