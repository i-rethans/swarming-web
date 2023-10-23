<template>
  <div class="button-container">
    <BaseButton class="no-background inactive" icon="ic_empty"> </BaseButton>
    <BaseButton
      class="blue"
      :swarming-session="swarmingSession"
      @click="goToButtonTarget"
    >
      {{ buttonText }}
    </BaseButton>
    <BaseButton
      class="no-background"
      :swarming-session="swarmingSession"
      icon="ic_share"
      @click="goToShare"
    >
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
  buttonText: string;
  buttonTarget: string;
}>();

const route = useRoute();

const router = useRouter();
const localePath = useLocalePath();

const goToShare = () => {
  router.push(
    localePath({ name: "swarm-share", query: { id: route.query.id } }),
  );
};

const goToButtonTarget = () => {
  router.push(
    localePath({ name: props.buttonTarget, query: { id: route.query.id } }),
  );
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
