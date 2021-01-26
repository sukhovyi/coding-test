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
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
