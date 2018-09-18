<template>
    <div class="hello3">
      {{msg2}}
      <div>我是返回上个路由</div>
      {{ route }}
      <router-view/>
    </div>
</template>
<script>
export default {
  name: 'Hello3',
  data () {
    return {
      msg2: 'hello hello say hello, im hello3',
      route: this.$route.params.id
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(123456)
  },
  watch: {
    'this.$route' (to, from) {
      console.log('路由变化了')
    },
    deep: true
  }
}
</script>
