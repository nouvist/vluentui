import { App } from 'vue';
import VSidebar from './VSidebar/sfc.vue';
import VInput from './VInput/sfc.vue';
import VContainer from './VContainer/sfc.vue';
import VIcon from './VIcon/sfc.vue';

export default (app: App) => {
  app.component('VSidebar', VSidebar);
  app.component('VInput', VInput);
  app.component('VContainer', VContainer);
  app.component('VIcon', VIcon);
};
