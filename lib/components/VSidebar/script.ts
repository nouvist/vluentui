import anime from 'animejs';
import {
  computed, defineComponent, ref,
} from 'vue';
import VSidebarButton from '../VSidebarButton/sfc.vue';

export default defineComponent({
  name: 'VSidebar',
  components: { VSidebarButton },
  props: {
    currentPage: {
      type: String,
      default: 'Undefined',
    },
    navlist: {
      type: Array as () => { name: string; icon: string; active?: boolean }[],
      required: true,
    },
  },
  setup() {
    const sidebarOpen = ref(false);
    const sidebar = ref<HTMLDivElement>();
    const sidebarClass = computed(
      () => `v-sidebar ${sidebarOpen.value ? 'v-sidebar-open' : ''}`,
    );
    const toggleSidebar = async () => {
      sidebarOpen.value = !sidebarOpen.value;
      if (!sidebar.value) return;
      if (sidebarOpen.value) {
        await anime
          .timeline({
            targets: sidebar.value,
          })
          .add({
            translateX: -25,
            opacity: 0,
            scaleX: 0.9,
            duration: 0,
          })
          .add({
            opacity: 1,
            scaleX: 1,
            translateX: 0,
            easing: 'easeOutCubic',
            duration: 250,
          }).finished;
        sidebar.value.removeAttribute('style');
      } else {
        await anime
          .timeline({
            targets: sidebar.value,
          })
          .add({
            translateX: 340,
            opacity: 1,
            scaleX: 1,
            duration: 0,
          })
          .add({
            opacity: 0,
            scaleX: 0.9,
            translateX: 315,
            easing: 'easeOutCubic',
            duration: 250,
          }).finished;
        sidebar.value.removeAttribute('style');
      }
    };
    return {
      sidebar,
      sidebarClass,
      toggleSidebar,
    };
  },
});
