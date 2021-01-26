<template>
  <ui-base-input
    :label="label"
    :errors="errors"
    :hints="hints"
  >
    <text-area
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </ui-base-input>
</template>

<script>
import { styled } from '@egoist/vue-emotion';
import UiBaseInput from '../ui-base-input/UiBaseInput';

const TextArea = styled('textarea')`
  width:100%;
  border: 1px solid black;
  border-radius: 5px;
`;

export default {
  name: 'UiTextarea',
  components: {
    UiBaseInput,
    TextArea,
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
  },
};
</script>
