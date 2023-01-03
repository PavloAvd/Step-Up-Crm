import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp'),
    meta: {
      layout: 'auth'
      // auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth'),
    meta: {
      layout: 'auth'
      // auth: true
    }
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('@/views/students/Music'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/theory',
    name: 'Theory',
    component: () => import('@/views/students/Theory'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import('@/views/students/Journal'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/video-lessons',
    name: 'VideoLessons',
    component: () => import('@/views/students/VideoLessons'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/students/EventCalendar'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/students/Chat'),
    meta: {
      layout: 'main'
      // auth: true
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
