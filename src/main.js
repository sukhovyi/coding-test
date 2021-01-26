import { VueEmotion } from '@egoist/vue-emotion';
import VueConfirmDialog from 'vue-confirm-dialog';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from './App';
import router from './router';
import apolloProvider from './apollo';

Vue.use(VueEmotion);
Vue.use(VueApollo);
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  components: { App },
  template: '<App/>',
});
