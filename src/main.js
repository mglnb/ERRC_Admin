// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import db from './firebase'

Vue.config.productionTip = false
Vue.use(VueFire)

 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref('codes'),
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // full syntax
    anObject: {
      source: db.ref('codes'),
      // optionally bind as an object
      asObject: true,
      // optionally provide the cancelCallback
      cancelCallback: function () {},
      // this is called once the data has been retrieved from firebase
      readyCallback: function () {}
    }
  },
  components: { App }
})
