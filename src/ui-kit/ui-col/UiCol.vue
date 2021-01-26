<template>
  <component :is="component">
    <slot/>
  </component>
</template>
<script>
import { styled } from '@egoist/vue-emotion';

export default {
  name: 'UiCol',
  props: {
    cols: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    component() {
      const width = (100 / 10) * this.cols;
      return styled('div')`
         flex: 0 0 ${width}%;
         max-width: ${width}%;
      `;
    },
  },
};
</script>
