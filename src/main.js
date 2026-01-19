import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/conghf";

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
});
