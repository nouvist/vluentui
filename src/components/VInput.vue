<template>
  <label :class="labelClass">
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
      v-if="!blank && props.clearButton"
      @click="onClear"
    >
      <i :class="`bi ${props.clearIcon}`" />
    </button>
  </label>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';

export default defineComponent({
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    clearButton: {
      type: Boolean,
      default: false,
    },
    clearIcon: {
      type: String,
      default: 'bi-x',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'clear'],
  setup(props, ctx) {
    const focus = ref(false);
    const blank = ref(props.modelValue === '');
    const onFocus = (e: FocusEvent) => {
      if (e.type === 'focus') focus.value = true;
      else focus.value = false;
    };
    const labelClass = computed(
      () => `v-input${focus.value ? ' v-input-focus' : ''}${
        props.clearButton ? ' v-input-clearbtn' : ''
      }`,
    );
    const onInput = (e: Event | string) => {
      const val = typeof e === 'string' ? e : (e.currentTarget as HTMLInputElement).value;
      ctx.emit('update:modelValue', val);
    };
    const onClear = () => {
      let def = true;
      ctx.emit('clear', {
        preventDefault: () => {
          def = false;
        },
      });
      if (def) onInput('');
    };
    watchEffect(() => {
      blank.value = props.modelValue === '';
    });
    return {
      props,
      onFocus,
      onInput,
      onClear,
      labelClass,
      blank,
    };
  },
});
</script>

<style lang="less">
.v-input {
  vertical-align: top;
  display: inline-flex;
  border: 1px solid @color0;
  align-items: center;
  border-radius: 2px;
  height: 32px;
  padding: 0 6px;
  gap: 6px;
  padding: 0 16px;
  background: @darker0;
  cursor: text;
  transition: border, box-shadow 150ms;
  @media @maxTablet {
    height: 40px;
  }
  &.v-input-clearbtn {
    padding-right: 6px;
  }
  &:hover {
    border: 1px solid @color2;
  }
  &.v-input-focus {
    border: 1px solid @color2;
    box-shadow: 0 0 0 1px @color2;
  }
  > .bi {
    margin-right: 10px;
  }
  input {
    background: none;
    min-width: 0;
    flex: 1;
    &::placeholder {
      color: @color0;
    }
  }
  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: @hover0;
    }
    width: 24px;
    height: 24px;
  }
}
</style>
