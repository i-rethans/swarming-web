<template>
  <span class="base-icon" />
</template>

<script setup lang="ts">
const props = defineProps<{ src: string }>();

const iconSrc = computed(() => {
  return `url(/icons/${props.src}.svg)`;
});
</script>

<style lang="scss" scoped>
.base-icon {
  background-image: v-bind(iconSrc);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}

.size-24 {
  width: 48px;
  height: 48px;
}
</style>
