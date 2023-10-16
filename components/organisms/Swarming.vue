<template>
  <div class="swarming">
    <QuestionTitle :swarming-session="swarmingSession"></QuestionTitle>
    <Slider v-if="swarmingState()" :swarming-session="swarmingSession"></Slider>
    <AdminSettings
      v-else-if="startedStateAndAdmin()"
      :swarming-session="swarmingSession"
    ></AdminSettings>
    <BaseText v-else class="centered-block text-large">{{
      $t("swarming.waiting-for-participants")
    }}</BaseText>
    <SwarmingInfo
      :swarming-session="swarmingSession"
      :participants="numberOfParticipants"
    ></SwarmingInfo>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { numberOfParticipants, state, admin, question } = props.swarmingSession;

const startedStateAndAdmin = () => {
  console.log(state.value, admin.value);
  return state.value == "started" && admin.value;
};

const swarmingState = () => {
  return state.value == "swarming";
};

watch(
  () => state.value,
  (state) => {
    if (state == "finished") {
      const router = useRouter();
      const route = useRoute();
      const uuid = route.query.id;
      const localePath = useLocalePath();
      router.push(localePath({ name: "swarm-result", query: { id: uuid } }));
    }
  },
);
</script>

<style lang="scss" scoped>
.swarming {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
</style>
