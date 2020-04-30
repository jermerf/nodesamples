<template>
  <div>
    <div class="blogpost" v-for="b in $root.blogs" :key="b._id">
      {{new Date(b.postedOn).toDateString()}}
      <h4>{{b.content}}</h4>
      <button class="delblog" @click="deleteBlog(b)">X</button>
    </div>
  </div>
</template>

<script>
import Server from '../Server'
export default {
  methods: {
    deleteBlog(blog) {
      Server.$post('/blog/remove', { id: blog._id})
      .then(res => {
        if(res.success) {
          this.$root.refreshBlog()
        }
      })
    } 
  },
}
</script>

<style>
.blogpost {
  margin: 5px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
}
.delblog {
  float: right;
}
h4 {
  margin: 5px;
}
</style>