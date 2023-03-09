import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'

import './assets/main.css'

const app = createApp(App);
app.use(VueCookies, {
    expires: '1d', 
    path: '/', 
    domain: '', 
    secure: '', 
    sameSite: 'Lax'
});
app.mount('#app');