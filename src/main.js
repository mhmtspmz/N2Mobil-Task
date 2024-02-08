 import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).mount('#app');

const app =createApp(App);
app.use(router);
app.mount('#app');



