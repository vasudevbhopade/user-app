import { createApp } from 'vue'
import App from './App.vue'
import TheFooter from './components/TheFooter.vue'

const app = createApp(App)

app.component("TheFooter", TheFooter)

app.mount('#app')
