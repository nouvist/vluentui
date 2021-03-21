<template>
  <button :class="btnClass">
    <div />
    <v-icon :class="`bi ${icon}`" />
    <span> <slot /> </span>
  </button>
</template>

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
