<template>
  <SwarmingTemplate v-if="emptyQuestion(question)">
    <template #content>
      <QuestionInput
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
const { setQuestion, question } = props.swarmingSession;

console.log(question.value);

const emptyQuestion = (question: string | null) => {
  return question == "";
};

const goToSwarm = () => {
  const router = useRouter();
  const route = useRoute();
  const uuid = route.query.id?.toString();

  if (!uuid) {
    const localePath = useLocalePath();
    router.push(localePath({ name: "swarm", query: { id: uuid } }));
  }
};
const updateQuestion = (questionInput: string) => {
  setQuestion(questionInput);
  goToSwarm();
};

if (question) {
  goToSwarm();
}
</script>
