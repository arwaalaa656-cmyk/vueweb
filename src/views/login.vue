<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">

    <div class="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md">

      <h2 class="text-4xl font-extrabold text-center mb-8 text-gray-800">Welcome Back</h2>

      <form @submit.prevent="login" class="space-y-6">

        <div>
          <label class="text-sm text-gray-600">Email</label>
          <input v-model="email" type="email" placeholder="example@mail.com"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
        </div>
        <div>
          <label class="text-sm text-gray-600">Password</label>
          <input v-model="password" type="password" placeholder="********"
            class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
        </div>

        <div v-if="errorMessage" class="text-red-600 text-sm font-semibold">
          {{ errorMessage }}
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition duration-300 disabled:opacity-50">
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
      <p class="text-center text-sm mt-6 text-gray-600">
        Don't have an account?
        <router-link to="/sign" class="text-indigo-600 font-semibold hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import { auth } from '@/firebase/conghf'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const login = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/home')
  } catch (error) {
    errorMessage.value = error.message
  }

  isLoading.value = false
}
</script>

<style scoped>
</style>
