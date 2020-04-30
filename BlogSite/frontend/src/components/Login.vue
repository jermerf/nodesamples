<template>
  <div class="login">    
    <form v-if="!$root.isLoggedIn" @submit="register">
      <input type="text" v-model="regUsername">
      <input type="password" v-model="regPassword">
      <input type="submit" value="Register" />
    </form>
    <form v-if="!$root.isLoggedIn" @submit="login">
      <input type="text" v-model="logUsername">
      <input type="password" v-model="logPassword">
      <input type="submit" value="Login" />
    </form>

    <div v-if="$root.isLoggedIn">{{$root.username}}</div>
    <button v-if="$root.isLoggedIn" @click="logout">Logout</button>
  </div>
</template>

<script>
import Server from '../Server'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data: ()=>({
    logUsername: "",
    logPassword: "",
    regUsername: "",
    regPassword: "",
  }),
  methods: {
    login(ev) {
      ev.preventDefault()
      Server.$post('/auth/login', {
        username: this.logUsername,
        password: this.logPassword
      }).then(res => {
        if(res.success) {
          this.$root.isLoggedIn = true
          this.$root.username = res.username
        }
      })
    },
    register(ev) {
      ev.preventDefault()
      Server.$post('/auth/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if(res.success) {
          this.isLoggedIn = true
          this.username = res.username
        }
      })
    },
    logout () {
      Server.$post('/auth/logout')
      .then(res => {
        if(res.success) {
          this.$root.isLoggedIn = false
          this.$root.username = ""
        }
      })
    }
  },
  mounted() {
    Server.$post('/auth/check')
    .then(res => {
      if(res.success) {
        this.$root.isLoggedIn = true
        this.$root.username = res.username
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
  display: inline-block;
  text-align: left;
}
.login input, .login button {
  margin: 2px;
}
</style>
