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
  background-color: $off-white;
  opacity: 0.7;
  color: $black;
  border: none;
  padding: 1rem 1rem;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.full-width {
    width: 100%;
  }

  &.swarm {
    border-radius: 12px;
    padding: 0.25rem 0.25rem;
  }

  &.start {
    border-radius: 1.5rem;
    font-size: 24px;
    padding: 1.5rem 1.5rem;
    font-weight: 600;
  }

  &.question {
    border-radius: 7px;
    font-size: 16px;
    padding: 1rem 1rem;
  }

  &.flash {
    color: $off-white;

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
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.7;
    }
  }

  //Firefox 1+
  @-webkit-keyframes flash {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.7;
    }
  }

  //Safari 3-4
  @-moz-keyframes flash {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.7;
    }
  }
}
</style>
