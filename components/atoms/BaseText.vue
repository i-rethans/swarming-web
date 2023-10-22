<template>
  <span class="base-text"><slot /></span>
</template>

<style lang="scss" scoped>
.base-text {
  white-space: pre-line;
  font-size: 17px;
  line-height: 130%;
  font-weight: 400;
}
.semi-bold {
  font-weight: 500;
  line-height: 1.5rem;
}
.bold {
  font-weight: 600;
  line-height: 1.5rem;
}
.light {
  font-weight: 300;
}
.extra-light {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
.d-block {
  display: block;
}
.text-light {
  color: $white;
}

.centered {
  text-align: center;
}
.centered-block {
  display: block;
  text-align: center;
}

.strikethrough {
  text-decoration: line-through;
}
.text-data {
  font-size: 2rem;
  line-height: 1.5rem;
}

.text-large {
  font-size: 1.25rem;
  line-height: 1.5rem;
}

.text-extra-large {
  font-size: 3rem;
  line-height: 2.25rem;
}
.text-extra-extra-large {
  font-weight: 300;
  font-size: 10rem;
  line-height: 2.25rem;
}

.blog-title {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 130%;
}

.explain {
  color: $dark-purple;
  font-size: 0.75rem;
  width: 25vw;
  text-align: center;
  position: absolute;
  font-style: italic;
}
</style>
