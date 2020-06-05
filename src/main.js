// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueIconFont from 'vue-icon-font'
import carousel from 'vue-owl-carousel'
import VueForm from 'vue-form'
import VueTypedJs from 'vue-typed-js'
import $ from 'jquery'
import VueWaypoint from 'vue-waypoint'

export default {
  mounted () {
    $('.venobox').venobox();
  }
}

// import vue-jquery from 'vue-jquery';

// import 'jquery-ui';

/* font-class */
// import '@/assets/iconfont/iconfont.css'

/* symbol,svg */
// import '@/assets/iconfont/iconfont.js'

import router from './router'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueIconFont);
Vue.use(VueForm);
Vue.use(VueTypedJs);
Vue.use(VueWaypoint);
Vue.use(carousel);


// Vue.use(vue-jquery);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

new Vue({
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(App)
});

new Vue({
  el: '#app',
  render: h => h(App)
});


// export default {
//   components: { carousel },
// }
