<template>
  <div>
    {{ label }}
    <input-text
      v-bind:value="value"
      v-on:input="inputChange"
      v-on:change="$emit('change', $event.target.value)"
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
