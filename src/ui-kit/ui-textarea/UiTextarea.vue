<template>
  <ui-base-input
    :label="label"
    :errors="errors"
    :hints="hints"
  >
    <component :is="component"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </ui-base-input>
</template>

<script>
import { StyledTextArea, StyledTextAreaError } from './StyledTextArea';
import UiBaseInput from '../ui-base-input/UiBaseInput';

export default {
  name: 'UiTextarea',
  components: {
    UiBaseInput,
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
  computed: {
    component() {
      return this.errors.length ? StyledTextAreaError : StyledTextArea;
    },
  },
};
</script>
