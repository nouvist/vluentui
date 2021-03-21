<template>
  <!-- #region titlebar -->
  <div class="v-sidebar-titlebar">
    <div>
      <button
        class="v-sidebar-menubtn"
        @click="toggleSidebar"
      >
        <i class="bi bi-list" />
      </button>
      <h1>{{ currentPage }}</h1>
    </div>
  </div>
  <!-- #endregion -->

  <!-- #region sidebar -->
  <div
    ref="sidebar"
    :class="sidebarClass"
  >
    <div>
      <button
        class="v-sidebar-menubtn"
        @click="toggleSidebar"
      >
        <i class="bi bi-list" />
      </button>
      <h1>{{ currentPage }}</h1>
    </div>
    <div>
      <h1>{{ currentPage }}</h1>
      <v-sidebar-button active>
        mantap
      </v-sidebar-button>
      <v-sidebar-button> mantap </v-sidebar-button>
      <v-sidebar-button> mantap </v-sidebar-button>
    </div>
  </div>
  <!-- #endregion -->
</template>

<script lang="ts">
import anime from 'animejs';
import { computed, defineComponent, ref } from 'vue';
import VSidebarButton from './VSidebarButton.vue';

export default defineComponent({
  name: 'VSidebar',
  components: { VSidebarButton },
  props: {
    currentPage: {
      type: String,
      default: 'Undefined',
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
</script>

<style lang="less">
// #region app direction
@media @maxTablet {
  #app {
    flex-direction: column;
  }
}
// #endregion

// #region title & btn
.v-sidebar-titlebar h1,
.v-sidebar h1 {
  font-size: 24px;
  margin: 16px 0;
  @media @maxPhone {
    font-size: 20px;
  }
}
.v-sidebar-menubtn {
  background: none;
  width: 40px;
  height: 40px;
  font-size: 16px;
  margin-left: 16px;
  margin-right: 8px;
  &:hover {
    background: @hover0;
  }
}
// #endregion

// * sidebar
.v-sidebar {
  @media @maxTablet {
    position: fixed;
    left: -350px;
    background: @surface1;
    box-shadow: @elevation0;
    border: none;
    &.v-sidebar-open {
      left: 0px;
    }
  }
  width: 340px;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border-inline-end: 1px solid @color1;
  > div:first-child {
    padding: 16px 0;
    display: flex;
    align-items: center;
    @media @minTablet {
      display: none;
    }

    @media @maxPhone {
      height: 60px;
    }
  }
  > div:last-child {
    padding: 20px 25px 0px 50px;
    @media @maxTablet {
      padding: 0 30px 0 30px;
    }
    h1 {
      @media @maxTablet {
        display: none;
      }
    }
  }
}

// * titlebar
.v-sidebar-titlebar {
  @media @minTablet {
    display: none;
  }
  @media @maxPhone {
    height: 60px;
  }
  display: flex;
  height: 75px;
  border-block-end: 1px solid @color1;
  position: sticky;
  > div {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  }
}
</style>
