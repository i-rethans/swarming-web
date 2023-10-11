import { swarmingSocket } from "~/composables/SwarmingSocket";

<template>
  <div class="question-input-container">
    <BaseTitle heading-level="2">
      {{ $t("swarming.explanation") }}
    </BaseTitle>
    <BaseInput
      v-model="questionInput"
      :placeholder="$t('swarming.question-input-placeholder')"
      @update:model-value="updateValue"
      @submit="submitQuestion"
    ></BaseInput>
    <BaseButton class="question" @click="submitQuestion">
      {{ $t("swarming.submit-question") }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

const questionInput = ref(props.modelValue);

const emits = defineEmits<{
  "update:modelValue": [value: string];
}>();

const updateValue = (question: string) => {
  questionInput.value = question;
};

const submitQuestion = () => {
  emits("update:modelValue", questionInput.value);
};
</script>

<style lang="scss" scoped>
.question-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}
</style>
