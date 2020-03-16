import Vue from 'vue'
import Chat from 'vue-beautiful-chat';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import { createProvider } from './vue-apollo';

import './assets/css/main.css';

Vue.config.productionTip = false
Vue.use(Chat);

new Vue({
  router,
  vuetify,
  apolloProvider: createProvider(),
  render: function (h) { return h(App) }
}).$mount('#app')
