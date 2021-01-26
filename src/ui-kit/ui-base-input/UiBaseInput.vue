<template>
  <div>
    <div v-if="label" class="caption">
      {{ label }}
    </div>
    <div>
      <slot/>
    </div>
    <div v-if="errors.length" class="caption">
      <span
        v-for="(error, key) in errors"
        :key="key"
      >
        {{ error }}
      </span>
    </div>
    <div v-else-if="hints.length" class="caption">
      <span
        v-for="(hint, key) in hints"
        :key="key"
      >
        {{ hint }}
      </span>
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
