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
    // is input on focus
    const isFocus = ref(false);
    const onFocus = (e: FocusEvent) => {
      if (e.type === 'focus') isFocus.value = true;
      else isFocus.value = false;
    };

    // is input value is empty
    const isEmpty = ref(props.modelValue === '');
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
      isEmpty.value = props.modelValue === '';
    });

    const className = computed(
      () => `v-input${isFocus.value ? ' v-input-focus' : ''}${
        props.clearButton ? ' v-input-clearbtn' : ''
      }`,
    );
    return {
      props,
      onFocus,
      onInput,
      onClear,
      className,
      isEmpty,
    };
  },
});
