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
      <v-sidebar-button
        v-for="i of navlist"
        :key="i.name"
        :icon="i.icon"
        :active="i.active"
      >
        {{ i.name }}
      </v-sidebar-button>
    </div>
  </div>
  <!-- #endregion -->
</template>

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
