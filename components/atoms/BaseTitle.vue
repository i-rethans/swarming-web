<template>
  <h1 v-if="headingLevel === '1'" v-bind="$attrs"><slot /></h1>
  <h2 v-if="headingLevel === '2'" v-bind="$attrs"><slot /></h2>
  <h3 v-if="headingLevel === '3'" v-bind="$attrs"><slot /></h3>
  <h4 v-if="headingLevel === '4'" v-bind="$attrs"><slot /></h4>
  <h5 v-if="headingLevel === '5'" v-bind="$attrs"><slot /></h5>
  <h6 v-if="headingLevel === '6'" v-bind="$attrs"><slot /></h6>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
export interface Props {
  headingLevel?: "1" | "2" | "3" | "4" | "5" | "6";
}

withDefaults(defineProps<Props>(), {
  headingLevel: "1",
});
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", sans-serif;
  color: $black;
  margin-top: 0em;
  margin-bottom: 0em;
  &.bold {
    font-weight: 500;
  }

  &.top {
    // position: absolute;
    text-align: center;
    // top: 10vh;
  }

  &.empty {
    -webkit-text-fill-color: transparent;
  }
}

h1 {
  font-size: 3.5rem;
  font-weight: 300;
}
h2 {
  font-size: 2.5rem;
  font-weight: 300;
}
h3 {
  font-size: 2rem;
  font-weight: 400;
}
h4 {
  font-size: 1.25rem;
}

.text-light {
  color: $white;
}

.centered {
  text-align: center;
}
</style>
