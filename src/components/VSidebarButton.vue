<template>
  <button :class="btnClass">
    <div />
    <i :class="iconClass" />
    <span> <slot /> </span>
  </button>
</template>

<script lang="ts">
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
</script>

<style lang="less">
.v-sidebarbutton {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: none;
  text-align: left;
  height: 32px;
  border-radius: 2px;
  @media @maxTablet {
    height: 40px;
    gap: 10px;
    padding-left: 6px;
  }
  > div {
    width: 3px;
    content: '';
    display: block;
    height: 20px;
    margin-left: 4px;
    right: unset;
    border-radius: 2px;
  }
  &:hover {
    background: @hover0;
  }
  &.v-sidebarbutton-active {
    > div {
      background: #4ea1e1;
    }
    background: @hover1;
  }
}
</style>
