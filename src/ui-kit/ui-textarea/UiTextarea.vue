<template>
  <ui-base-input
    :label="label"
    :errors="errors"
    :hints="hints"
  >
    <styled-text-area
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </ui-base-input>
</template>

<script>
import StyledTextArea from './StyledTextArea';
import UiBaseInput from '../ui-base-input/UiBaseInput';

export default {
  name: 'UiTextarea',
  components: {
    UiBaseInput,
    StyledTextArea,
  },
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
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
