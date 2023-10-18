<template>
  <div class="infomation-item">
    <div class="item-name">
      <BaseIcon :src="iconSrc"></BaseIcon>
      <BaseText>{{ itemName }}</BaseText>
    </div>
    <BaseText class="text-data light">{{ data }}</BaseText>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconSrc: string;
  itemName?: string;
  data?: number | string;
}>();
</script>

<style lang="scss" scoped>
.item-name {
}
.infomation-item {
  display: flex;
  justify-content: space-between;
}
</style>
