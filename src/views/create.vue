<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

      <h2 class="text-3xl font-bold text-center mb-6">Create Post</h2>

      <form @submit.prevent="createPost" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Title</label>
          <input v-model="title" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Content</label>
          <textarea v-model="content" rows="5" required
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
        </div>

        <button type="submit"
                class="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
          Submit Post
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const router = useRouter()
const title = ref('')
const content = ref('')
const postsCollection = collection(db, 'posts')

const createPost = async () => {
  if (!auth.currentUser) return

  await addDoc(postsCollection, {
    title: title.value,
    content: content.value,
    authorId: auth.currentUser.uid,
    authorEmail: auth.currentUser.email,
    createdAt: Timestamp.fromDate(new Date())
  })

  router.push('/')
}
</script>
