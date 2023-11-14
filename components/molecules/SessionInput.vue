import { swarmingSocket } from "~/composables/SwarmingSocket";

<template>
  <div class="session-input-container">
    <BaseTitle heading-level="3" class="question-value">
      {{ $t("swarming.session-input") }}
    </BaseTitle>
    <div class="input-items">
      <BaseInput
        v-model="questionInput"
        :placeholder="$t('swarming.question-input-placeholder')"
        @update:model-value="updateQuestion"
        @submit="sumbitSession"
      ></BaseInput>
      <div class="input-item">
        <div class="range-item">
          <BaseText class="text-large">
            {{ $t("swarming.range") }}
          </BaseText>
          <BaseText class="italic text-small">
            {{ $t("swarming.range-values") }}
          </BaseText>
        </div>
        <BaseNumberInput
          v-model="rangeInput"
          :placeholder="$t('swarming.question-input-placeholder')"
          @update:model-value="updateRange"
          @submit="sumbitSession"
        ></BaseNumberInput>
      </div>
    </div>
    <BaseButton class="purple" @click="sumbitSession">
      {{ $t("swarming.submit-question") }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const { updateSession } = props.swarmingSession;

const questionInput = ref("");
const rangeInput = ref(20);

const updateQuestion = (question: string) => {
  questionInput.value = question;
};

const updateRange = (range: number) => {
  rangeInput.value = range;
};

const sumbitSession = () => {
  updateSession(questionInput.value, rangeInput.value);
};
</script>

<style lang="scss" scoped>
.session-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
}

.input-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}

.input-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vh;
}

.range-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
}
</style>
