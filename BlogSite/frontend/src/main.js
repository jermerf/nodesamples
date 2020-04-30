import Vue from 'vue'
import App from './App.vue'
import Server from './Server'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: () => ({
    isLoggedIn: false,
    username: "",
    blogs: []
  }),
  methods: {
    refreshBlog(){
      Server.$get('/blog')
      .then(res => {
        this.blogs = res.blogs
      })
    }
  }
}).$mount('#app')
