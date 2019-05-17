import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cities from './views/Cities.vue'
import Chosen from './views/Chosen.vue'
import Eventlist from './views/Eventlist.vue'
import Profile from './views/Profile.vue'
import Calender from './views/Calender.vue'
import News from './views/News.vue'
import Chats from './views/Chats.vue'
import ChosenEvent from './views/ChosenEvent.vue'
import Filteredlist from './views/Filteredlist.vue'

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
      path: '/eventlist',
      name: 'Eventlist',
      component: Eventlist,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/calender',
      name: 'Calender',
      component: Calender,
      props: true
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      props: true
    },
    {
      path: '/chats',
      name: 'Chats',
      component: Chats,
      props: true
    },
    {
      path: '/chosenevent',
      name: 'ChosenEvent',
      component: ChosenEvent,
      props: true
    },
    {
      path: '/filteredlist',
      name: 'Filteredlist',
      component: Filteredlist,
      props: true
    }
  ]
})
