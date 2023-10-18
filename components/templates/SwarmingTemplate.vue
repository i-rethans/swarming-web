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
  background-image: url("~/assets/images/logo.png"),
    url("~/assets/images/background.png");
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

.right-arrow {
  width: 200px;
  height: 200px;
}
</style>
