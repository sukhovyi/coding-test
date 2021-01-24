<template>
  <div>
    {{ label }}
    <input-text
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :type="type"
    />
  </div>
</template>

<script>
import { styled } from '@egoist/vue-emotion';

const InputText = styled('input')`
  width:100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
export default {
  name: 'UiInput',
  components: {
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
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>
