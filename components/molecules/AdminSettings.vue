<template>
  <div class="admin">
    <div class="share">
      <qrcode-vue
        :value="value"
        :level="level"
        :render-as="renderAs"
        :size="200"
      />
      <BaseButton class="white" @click="copy">
        {{ isCopied ? $t("swarming.copied") : $t("swarming.copy-link") }}
      </BaseButton>
    </div>
    <BaseButton class="purple" @click="start">
      {{ $t("swarming.start-session") }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QrcodeVue, { Level, RenderAs } from "qrcode.vue";

const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();
const { startSwarming } = props.swarmingSession;
const isCopied = ref(false);

const route = useRoute();

const { baseUrl } = useRuntimeConfig().public;
console.log(baseUrl);

const shareUrl = `${baseUrl}${route.href}`;

const start = () => {
  startSwarming();
};

const copy = () => {
  navigator.clipboard.writeText(shareUrl);
  isCopied.value = true;
};

console.log(shareUrl);

const value = ref(shareUrl);
const level = ref<Level>("M");
const renderAs = ref<RenderAs>("svg");
</script>

<style lang="scss" scoped>
.share {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
</style>
