import { VueEmotion } from '@egoist/vue-emotion';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueEmotion);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
