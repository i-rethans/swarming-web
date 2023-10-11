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
  background-image: url("public/logo.png"), url("public/background.png");
  background-size: 60%, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  // opacity: 0.3, 1;
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
