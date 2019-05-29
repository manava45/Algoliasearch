// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import AlgoliaComponents from 'vue-instantsearch';

Vue.config.productionTip = false;
Vue.use(AlgoliaComponents);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
