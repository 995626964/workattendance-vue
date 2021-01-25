import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import request from '@/js/myaxios.js'
import token from '@/js/token.js'
const app = createApp(App)
app.config.globalProperties.$axios=request
app.config.globalProperties.$token=token

app.use(store).use(router).use(Antd).mount('#app')
