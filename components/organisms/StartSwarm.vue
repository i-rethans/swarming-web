import { swarmingSocket } from "~/composables/SwarmingSocket";

<template>
  <div class="swarming-input-container">
    <div class="swarma">
      <BaseTitle heading-level="2">
        {{ $t("start.welcome") }}
      </BaseTitle>
      <BaseTitle heading-level="2">
        {{ $t("start.swarma") }}
      </BaseTitle>
    </div>
    <BaseButton class="purple" @click="startSession">
      {{ $t("start.create-swarm") }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
const sessionId = uuidv4();
const router = useRouter();
const localePath = useLocalePath();

const startSession = () => {
  router.push(localePath({ name: "swarm", query: { id: sessionId } }));
};
</script>

<style lang="scss" scoped>
.swarming-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  // margin-top: 25vh;
}

.swarma {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gap: 0vh;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
