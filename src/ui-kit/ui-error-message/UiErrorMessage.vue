<template>
  <error-message>
    <slot/>
  </error-message>
</template>

<script>
import ErrorMessage from './ErrorMessage';

export default {
  name: 'UiErrorMessage',
  components: { ErrorMessage },
};
</script>
