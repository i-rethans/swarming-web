<template>
  <input
    class="base-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    @keydown="submit"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const currentInput = ref("");

const emits = defineEmits<{
  "update:modelValue": [value: string];
  submit: [];
}>();

const updateValue = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  currentInput.value = inputValue;
  emits("update:modelValue", inputValue);
};

const submit = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    emits("submit");
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  padding: 0.75rem;
  background: $off-white;
  opacity: 0.82;
  border: 3px solid $off-white;
  box-sizing: border-box;
  border-radius: 4rem;
  width: 80%;
  box-shadow: 0px 7px 5px $black;
}
</style>
