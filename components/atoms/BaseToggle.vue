<template>
  <div class="button r">
    <input
      v-if="rightActive || leftActive"
      type="checkbox"
      class="checkbox"
      :checked="rightActive"
      @change="change"
    />
    <div
      v-if="rightActive || leftActive"
      class="knobs"
      :class="{ active: leftActive || rightActive }"
    ></div>
    <div class="layer"></div>
    <BaseButton class="knobs-background-left" @click="decrease"></BaseButton>
    <BaseButton class="knobs-background-right" @click="increase"></BaseButton>
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
  console.log("hi");
  !leftActive.value ? changeDirection("left") : null;

  leftActive.value = true;
  rightActive.value = false;
};

const increase = () => {
  !rightActive.value ? changeDirection("right") : null;

  rightActive.value = true;
  leftActive.value = false;
};

const change = () => {
  if (rightActive.value) {
    decrease();
  } else {
    increase();
  }
};
</script>
<style lang="scss" scoped>
.toggle {
  // width: 200px;
  // height: 100px;
}

.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 160px;
  height: 85px;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 4;
}

.knobs {
  z-index: 3;
  &.active {
    animation: flash 1s linear infinite;
  }

  @keyframes flash {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
}

.knobs-background-left,
.knobs-background-right {
  z-index: 2;
  background-color: $dark-purple;
  opacity: 0.1;
  position: absolute;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
}

.knobs-background-left {
  background-image: url("/icons/ic_left.svg");
  top: 10px;
  left: 10px;
}

.knobs-background-right {
  background-image: url("/icons/ic_right.svg");
  top: 10px;
  right: 10px;
}

.layer {
  width: 100%;
  background-color: $off-white;
  z-index: 1;
}

/* Button 1 */
.knobs:before {
  background-image: url("/icons/ic_left.svg");
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;

  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 65px;
  height: 65px;
  font-size: 0px;
  border-radius: 50%;
  background-color: $dark-purple;
  transition: 0.25s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.checkbox:checked + .knobs:before {
  background-image: url("/icons/ic_right.svg");
  left: 85px;
}

.knobs,
.knobs:before,
.layer {
  transition: 0.25s ease all;
}
</style>
