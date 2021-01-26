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
.caption {
  font-size: 14px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
.col {
  width: 100%;
  padding: 12px;
}

.col-10 {
  flex: 0 0 100%;
  max-width: 100%;
}

.col-8 {
  flex: 0 0 80%;
  max-width: 80%;
}
.col-2 {
  flex: 0 0 20%;
  max-width: 20%;
}

.align-center-end {
  display: inline-grid;
  align-items: center;
  justify-content: end;
}
</style>
