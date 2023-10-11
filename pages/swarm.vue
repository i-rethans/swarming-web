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
</script>
