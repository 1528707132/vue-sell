// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../assets/less/index.css'

import router from '../router'
// import store from '../store'
import http from 'axios'
import store from '../store';

Vue.config.productionTip = false

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.$confirm = messageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$http = http
/* eslint-disable no-new */
router.beforeEach((to, from ,next) =>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }
  else{
    next()
  }
})
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  created() {
    store.commit('addMenu', router);
  },
  template: '<App/>'
})
