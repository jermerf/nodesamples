<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <Login msg="Welcome to Your Vue.js App"/>
    <CreateBlog />
    <BlogPosts />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import CreateBlog from './components/CreateBlog.vue'
import BlogPosts from './components/BlogPosts.vue'

export default {
  name: 'App',
  components: {
    Login, CreateBlog, BlogPosts
  },
  mounted(){
    this.$root.refreshBlog()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  max-height: 50px;
  margin-right: 20px;
}
</style>
