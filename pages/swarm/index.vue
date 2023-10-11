<template>
  <SwarmingTemplate v-if="swarmingSession">
    <template #content>
      <Swarming
        v-if="question"
        :question="question"
        :swarming-session="swarmingSession"
      ></Swarming>
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

console.log(question);

const updateQuestion = (questionInput: string) => {
  setQuestion(questionInput);
};
</script>
