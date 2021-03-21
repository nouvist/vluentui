<template>
  <label :class="className">
    <i
      v-if="props.icon"
      :class="`bi ${props.icon}`"
    />
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      :name="props.name"
      @input="onInput"
      @focus="onFocus"
      @blur="onFocus"
    >
    <button
      v-if="!isEmpty && props.clearButton"
      @click="onClear"
    >
      <i :class="`bi ${props.clearIcon}`" />
    </button>
  </label>
</template>

<script lang="ts" src="./script"></script>
<style lang="less" src="./style.less"></style>
