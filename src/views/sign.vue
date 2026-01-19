<template>
  <div
    class="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-4"
  >
    <div class="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl w-full max-w-lg">
      <h2 class="text-3xl font-bold text-center mb-6">Create Account</h2>

      <form @submit.prevent="register" class="space-y-5">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-sm text-gray-600">First Name</label>
            <input
              v-model="firstName"
              type="text"
              placeholder="John"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label class="text-sm text-gray-600">Last Name</label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Doe"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label class="text-sm text-gray-600">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="example@mail.com"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div>
          <label class="text-sm text-gray-600">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="********"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <div>
          <label class="text-sm text-gray-600">Phone</label>
          <input
            v-model="phone"
            type="text"
            placeholder="+20 123 456 789"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <div class="text-red-900">
          {{ errorMessage }}
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/conghf'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const register = async () => {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields.'
    return
  }

  try {
    isLoading.value = true
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/home')
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
</style>
