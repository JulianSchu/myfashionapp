import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cities from './views/Cities.vue'
import Chosen from './views/Chosen.vue'
import ChosenEvent from './views/ChosenEvent.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
    {
      path: '/chosen',
      name: 'Chosen',
      component: Chosen,
      props: true
    },
    {
      path: '/chosenEvent',
      name: 'ChosenEvent',
      component: ChosenEvent
    }
  ]
})
