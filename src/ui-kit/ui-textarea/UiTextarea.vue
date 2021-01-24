<template>
  <div class="input-container">
    {{ label }}
    <text-area
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import { styled } from '@egoist/vue-emotion';

const TextArea = styled('textarea')`
  width:100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default {
  name: 'UiTextarea',
  components: {
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
  },
};
</script>
