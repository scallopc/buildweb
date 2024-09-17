<template>
  <button :class="['button', buttonClass]" @click="handleClick">
    {{ name }}
  </button>
</template>

<script setup>
import { computed,  defineEmits, defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline'].includes(value),
  },
});

const emit = defineEmits(['click']);

const buttonClass = computed(() => {
  return props.type === 'outline' ? 'outline' : 'default';
});

const handleClick = () => {
  emit('click');
};

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
}

.default {
  border: 1px solid $yellow-web;
  background-color: $yellow-web;
  color: $night;
}

.outline {
  border: 1px solid $ghost-white;
  background-color: $prussian-blue;
  color: $ghost-white;
}
</style>
