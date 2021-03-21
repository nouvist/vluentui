import { createApp } from 'vue';
import vluent from '.';
import App from './App.vue';
import Loading from './loading';

createApp(App).use(vluent).mount('#app');
Loading.hide();
