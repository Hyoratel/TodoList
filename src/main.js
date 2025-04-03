import { createApp } from 'vue';
// 이벤트 적용
// import App from './App.vue';

// 에미터 활용
import App from './App2.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/main.css';

import mitt from 'mitt';

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
// createApp(App).mount('#app');
