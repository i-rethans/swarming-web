<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <WaitingRoom
        v-if="question"
        :swarming-session="swarmingSession"
      ></WaitingRoom>
      <QuestionInput
        v-if="!question"
        v-model="question"
        @update:model-value="updateQuestion"
      ></QuestionInput>
    </template>
  </SwarmingTemplate>
</template>

<script setup lang="ts">
const props = defineProps<{
  swarmingSession: ReturnType<typeof swarmingSocket>;
}>();

const { question, setQuestion } = props.swarmingSession;

const updateQuestion = (questionInput: string) => {
  setQuestion(questionInput);
};
</script>
