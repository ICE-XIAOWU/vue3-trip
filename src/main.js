import { createApp } from 'vue'
import App from './App.vue'


// 引入css
import './assets/css/index.css';
import 'normalize.css'

// 引入pinia
import pinia from './stores';

// 引入 router
import router from './router';
const app = createApp(App);
app.use(router).use(pinia).mount('#app');
