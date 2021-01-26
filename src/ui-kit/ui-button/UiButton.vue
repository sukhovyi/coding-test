<template>
  <component :is="buttonComponent" @click="onClick">
    <slot/>
  </component>
</template>

<script>
import ButtonType from './ButtonType';

export default {
  name: 'UiButton',
  components: {
    ...ButtonType.getButtons(),
  },
  props: {
    type: {
      type: String,
      default: ButtonType.PRIMARY,
    },
  },
  computed: {
    buttonComponent() {
      return ButtonType.getButtonByType(this.type);
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
