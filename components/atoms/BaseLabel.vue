<template>
  <span class="base-label">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.base-label {
  border-radius: 12px;
  padding: 0.5rem;
  color: $white;

  &.green {
    background-color: $green;
  }
  &.orange {
    background-color: $orange;
  }
}
</style>
