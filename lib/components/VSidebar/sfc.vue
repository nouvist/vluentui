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

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
