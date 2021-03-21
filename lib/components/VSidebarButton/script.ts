import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'VSidebarButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'bi-archive',
    },
  },
  setup(props) {
    const btnClass = computed(
      () => `v-sidebarbutton ${props.active ? 'v-sidebarbutton-active' : ''}`,
    );
    const iconClass = computed(() => `bi ${props.icon}`);
    return { btnClass, iconClass };
  },
});
