<template>
  <button class="base-button">
    <slot />
    <BaseIcon v-if="icon" :src="icon" class="size-24" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  padding: 1rem 1rem;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;

  // &.full-width {
  //   width: 100%;
  // }

  // &.swarm {
  //   // border-radius: 12px;
  //   padding: 0.25rem 0.25rem;
  // }

  &.purple {
    background-color: $dark-purple;
    font-size: 24px;
    padding: 1.5rem 2.5rem;
    font-weight: 600;
    color: $off-white;
  }

  &.white {
    background-color: $off-white;
    font-size: 1rem;
    opacity: 0.8;
    padding: 1rem 2rem;
    font-weight: 600;
  }

  &.blue {
    background-color: $blue;
    font-size: 1rem;
    opacity: 0.8;
    padding: 1rem 2rem;
    font-weight: 700;
  }

  &.no-background {
    background-color: transparent;
  }

  &.inactive {
    cursor: default;
  }

  &.low {
    position: absolute;
    bottom: 10vh;
  }
}

.toggle-button {
  width: 80px;
  height: 80px;
  border-radius: 90px;
  transition: 0.1s;
  background: $dark-purple;
  opacity: 0.1;

  &.active {
    opacity: 1;

    background-color: $dark-purple;

    animation-name: flash;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    //Firefox 1+
    -webkit-animation-name: flash;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    //Safari 3-4
    -moz-animation-name: flash;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
  }

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  //Firefox 1+
  @-webkit-keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  //Safari 3-4
  @-moz-keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
