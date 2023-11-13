<template>
  <input
    class="base-input"
    type="number"
    :value="modelValue"
    min="0"
    max="100"
    @input="updateValue"
    @keydown="submit"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
  placeholder?: string;
}>();

const currentInput = ref(props.modelValue);

const emits = defineEmits<{
  "update:modelValue": [value: number];
  submit: [];
}>();

const updateValue = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  const numericValue = Number(inputValue);
  currentInput.value = numericValue;
  emits("update:modelValue", numericValue);
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
  width: 75px;
  box-shadow: 0px 7px 5px $black;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
