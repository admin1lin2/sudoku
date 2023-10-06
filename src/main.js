import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { listenerList } from './Listener'

for (let lsn in listenerList) {
    document.body.addEventListener(lsn, listenerList[lsn])
}

createApp(App).mount('#app')