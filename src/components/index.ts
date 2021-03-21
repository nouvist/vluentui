import { App } from 'vue';
import VSidebar from './VSidebar/sfc.vue';
import VSidebarScript from './VSidebar/script.vue';
import VInput from './VInput/sfc.vue';
import VInputScript from './VInput/script.vue';

export default (app: App) => {
  app.component('VSidebar', VSidebar as typeof VSidebarScript);
  app.component('VInput', VInput as typeof VInputScript);
};
