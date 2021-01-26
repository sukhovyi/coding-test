<template>
  <base-input>
    <div v-if="label">
      {{ label }}
    </div>
    <div>
      <slot/>
    </div>
    <div v-if="errors.length" class="caption">
      <ui-error-message
        v-for="(error, key) in errors"
        :key="key"
      >
        {{ error }}
      </ui-error-message>
    </div>
    <div v-else-if="hints.length" class="caption">
      <span
        v-for="(hint, key) in hints"
        :key="key"
      >
        {{ hint }}
      </span>
    </div>
  </base-input>
</template>

<script>
import BaseInput from './BaseInput';
import UiErrorMessage from '../ui-error-message/UiErrorMessage';

export default {
  name: 'UiBaseInput',
  components: { UiErrorMessage, BaseInput },
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
