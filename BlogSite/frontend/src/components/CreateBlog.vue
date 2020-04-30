<template>
  <form @submit="submitPost" v-if="$root.isLoggedIn">
  <h3>Create Post</h3>
    <textarea
      v-model="content"
      name="content"
      cols="30"
      rows="10"
    ></textarea>
    <br>
    <button>Submit</button>
  </form>
</template>

<script>
import Server from '../Server'
export default {
  data: ()=>({
    content: ""
  }),
  methods: {
    submitPost(ev){
      ev.preventDefault()
      Server.$post("/blog/add", { content: this.content })
      .then(res => {
        if(res.success) {
          this.$root.refreshBlog()
          this.content = ""
        }
      })
    },
  }
}
</script>

<style>
</style>