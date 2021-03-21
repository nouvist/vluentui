<template>
  <label :class="className">
    <v-icon
      v-if="icon"
      :class="`bi ${icon}`"
    />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :name="name"
      @input="onInput"
      @focus="onFocus"
      @blur="onFocus"
    >
    <button
      v-if="!isEmpty && clearButton"
      @click="onClear"
    >
      <i :class="`bi ${clearIcon}`" />
    </button>
  </label>
</template>

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
