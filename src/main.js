import { createApp } from 'vue'
import App from './App.vue'

// 引入 Element Plus 样式
import 'element-plus/dist/index.css'

// 引入 Element Plus 组件库
import ElementPlus from 'element-plus'

const app = createApp(App)

// 使用 Element Plus
app.use(ElementPlus)

app.mount('#app')
