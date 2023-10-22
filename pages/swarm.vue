<template>
  <div>
    <NuxtPage v-if="swarmingSession" :swarming-session="swarmingSession" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const uuid = route.query.id?.toString();
const localePath = useLocalePath();

if (!uuid) {
  router.push(localePath({ name: "start" }));
}
const swarmingSession = swarmingSocket(uuid as string);
watch(
  () => swarmingSession?.state.value,
  (state) => {
    if (state == "finished") {
      router.push(localePath({ name: "swarm-result", query: { id: uuid } }));
    } else if (state == "swarming") {
      router.push(localePath({ name: "swarm-session", query: { id: uuid } }));
    }
  },
);
</script>
