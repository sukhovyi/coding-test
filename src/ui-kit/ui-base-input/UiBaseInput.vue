<template>
  <div>
    <div v-if="label">
      {{ label }}
    </div>
    <div>
      <slot/>
    </div>
    <div v-if="errors.length">
      <p
        v-for="(error, key) in errors"
        :key="key"
      >
        {{ error }}
      </p>
    </div>
    <div v-else-if="hints.length">
      <p
        v-for="(hint, key) in hints"
        :key="key"
      >
        {{ hint }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UiBaseInput',
  props: {
    label: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
    hints: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
