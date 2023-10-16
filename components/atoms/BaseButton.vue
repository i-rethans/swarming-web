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
  justify-content: space-between;
  border-radius: 1.5rem;

  &.full-width {
    width: 100%;
  }

  &.swarm {
    // border-radius: 12px;
    padding: 0.25rem 0.25rem;
  }
  &.arrow-button {
    width: 40px; /* Adjust the button width as needed */
    height: 40px; /* Adjust the button height as needed */
    border: none;
    position: relative;
    cursor: pointer;
    padding: 0;
    background-color: $off-white;
    opacity: 0.8;
    position: relative;
    transform: rotate(45deg);
    border-radius: 5px;

    &.right-arrow {
      clip-path: polygon(100% 100%, 100% 0%, 0% 0%);
      // clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
      left: -20px;

      // border-radius: 0 0 0 0.25em;
    }

    &.left-arrow {
      left: 21px;
      clip-path: polygon(100% 100%, 0% 100%, 0% 0%);
      border-radius: 5px;
    }
  }

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
