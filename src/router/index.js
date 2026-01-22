import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import login from '@/views/login.vue'
import sign from '@/views/sign.vue'
import { auth } from '@/firebase/conghf'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: login,
    meta: { requiresAuth: false }
  },
  {
    name: 'sign',
    path: '/sign',
    component: sign,
    meta: { requiresAuth: false }
  },
  {
    name: 'home',
    path: '/home',
    component: home,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  // 👇 حط اسم الريبو بتاعك هنا
  history: createWebHistory('/vueweb/'),
  routes,
})

// ✅ حل مشكلة تأخير Firebase
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser()

  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
