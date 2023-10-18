<template>
  <div class="toggle">
    <BaseButton
      icon="ic_left"
      class="toggle-button"
      :class="{ active: leftActive }"
      @click="decrease"
    ></BaseButton>
    <BaseButton
      icon="ic_right"
      class="toggle-button"
      :class="{ active: rightActive }"
      @click="increase"
    ></BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { changeDirection } = props.swarmingSession;
const rightActive = ref(false);
const leftActive = ref(false);

const decrease = () => {
  !leftActive.value ? changeDirection("left") : null;

  leftActive.value = true;
  rightActive.value = false;
};

const increase = () => {
  !rightActive.value ? changeDirection("right") : null;

  rightActive.value = true;
  leftActive.value = false;
};
</script>
<style lang="scss" scoped>
.toggle {
  width: 200px;
  height: 100px;
  background: $off-white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 100px;
  position: relative;
}
</style>
