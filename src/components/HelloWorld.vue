<template>
  <div class="hello">
    <router-link to="/hello2">点我我是hell2</router-link>
    <router-link to="/hello3/123">快点我我是hello3</router-link>
    <router-link to="/hello3/123/profile">跳转到子路由</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
