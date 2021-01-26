<template>
  <ui-base-input
    :label="label"
    :errors="errors"
    :hints="hints"
  >
    <input-text
      v-bind:value="value"
      v-on:input="inputChange"
      v-on:change="$emit('change', $event.target.value)"
      :type="type"
    />
  </ui-base-input>
</template>

<script>
import { styled } from '@egoist/vue-emotion';
import UiBaseInput from '../ui-base-input/UiBaseInput';

const InputText = styled('input')`
  width:100%;
  border: 1px solid black;
  border-radius: 5px;
`;
export default {
  name: 'UiInput',
  components: {
    UiBaseInput,
    InputText,
  },
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      required: true,
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
