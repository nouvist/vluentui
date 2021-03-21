<template>
  <button :class="btnClass">
    <div />
    <i :class="iconClass" />
    <span> <slot /> </span>
  </button>
</template>

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
