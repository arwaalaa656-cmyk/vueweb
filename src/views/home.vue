<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600">ARWA APP</h1>
        <div class="flex items-center gap-6">
          <span class="text-gray-600">Welcome  {{ auth.currentUser.email }}</span>
          <button
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
    <!-- Hero -->
    <section class="text-center py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h2 class="text-5xl font-bold mb-4">Welcome To Dashboard</h2>
      <p class="text-lg">Professional Home Page with Vue & Tailwind</p>
    </section>
    <!-- Cards -->
    <section class="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2">Users</h3>
        <p class="text-gray-600">Manage your users easily.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2">Orders</h3>
        <p class="text-gray-600">Track your orders.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2">Settings</h3>
        <p class="text-gray-600">Control system settings.</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { auth} from '@/firebase/conghf'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  // امسح التوكن أو البيانات
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>
