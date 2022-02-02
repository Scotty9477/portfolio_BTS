import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './Routes' // <---
import VueMobileDetection from 'vue-mobile-detection'

const app = createApp(App)

app.use(router)
app.use(VueMobileDetection)
app.mount("#app")
//createApp(App).use(router).use(VueMobileDetection).mount("#app")