<template>
  <ui-base-input
    :label="label"
    :errors="errors"
    :hints="hints"
  >
    <styled-input
      :placeholder="placeholder"
      :type="type"
      v-bind:value="value"
      v-on:input="inputChange"
      v-on:change="$emit('change', $event.target.value)"
    />
  </ui-base-input>
</template>

<script>
import StyledInput from './StyledInput';
import UiBaseInput from '../ui-base-input/UiBaseInput';

export default {
  name: 'UiInput',
  components: {
    UiBaseInput,
    StyledInput,
  },
  props: {
    value: {
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
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
    type: {
      type: String,
      default: 'text',
    },
    debounceTime: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    inputChange(event) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => this.$emit('input', event.target.value), this.debounceTime);
    },
  },
};
</script>
