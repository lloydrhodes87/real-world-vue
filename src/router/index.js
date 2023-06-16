import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    }
  ]
})

export default router
