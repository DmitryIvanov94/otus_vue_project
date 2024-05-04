import './style.css'
import { createApp } from 'vue'
import { Store } from './stores/settings.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Store)
app.use(router)

app.mount('#app')
