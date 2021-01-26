<template>
  <div id="app">
    <GlobalStyles/>
    <vue-confirm-dialog />

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import GlobalStyles from './ui-kit/GlobalStyles';

export default {
  name: 'App',
  components: { GlobalStyles },
};
</script>

<style>
@import "./ui-kit/styles/theme.css";
</style>
