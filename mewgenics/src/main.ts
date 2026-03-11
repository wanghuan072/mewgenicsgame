import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import '@fontsource/chakra-petch/400.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/russo-one/400.css'
import './assets/styles/global.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
