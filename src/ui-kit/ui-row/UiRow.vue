<template>
  <row>
    <slot/>
  </row>
</template>

<script>
import Row from './Row';

export default {
  name: 'UiRow',
  components: {
    Row,
  },
};
</script>
