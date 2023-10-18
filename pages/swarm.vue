<template>
  <div>
    <NuxtPage v-if="swarmingSession" :swarming-session="swarmingSession" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const uuid = route.query.id?.toString();

if (!uuid) {
  const localePath = useLocalePath();
  router.push(localePath({ name: "start" }));
}
const swarmingSession = swarmingSocket(uuid as string);

watch(
  () => swarmingSession?.state.value,
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
