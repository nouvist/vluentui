import { App } from 'vue';
import VSidebar from './VSidebar.vue';

export default (app: App) => {
  app.component('VSidebar', VSidebar);
};
