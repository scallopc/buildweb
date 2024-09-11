<template>
  <button :class="['button', buttonClass]">
    {{ name }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "default",
    validator: (value) => ["default", "outline"].includes(value),
  },
});

const buttonClass = computed(() => {
  return props.type === "outline" ? "outline" : "default";
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  
}

.default {
  border: 1px solid $yellow-web;
  background-color: $yellow-web;
  color: $night;
}

.outline {
  border: 1px solid $night;
  background-color: transparent;
  color: $night;
}
</style>
