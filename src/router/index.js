import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/hello2', name: 'Hello2', component: Hello2 },
    { path: '/hello3/:id',
      name: 'Hello3',
      component: Hello3,
      children: [
        {
          name: 'Profile',
          path: 'profile',
          component: Profile
        }
      ]
    }
  ]
})
