<template>
  <div class="swarming-template">
    <main class="swarming-field">
      <slot name="content" />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.swarming-template {
  background-image: url("logo.png"), url("background.png");
  background-size: 80%, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  height: 100vh;
  width: 100vw;
  background-color: $off-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.swarming-field {
  overflow: auto;
  padding: 2rem 3rem;
}
</style>
