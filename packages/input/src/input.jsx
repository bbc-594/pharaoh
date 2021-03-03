import { defineComponent, renderSlot } from 'vue';
import { props } from './props';
import { useInput, useClass } from './use';

const Input = defineComponent({
  name: 'PInput',
  emits: ['change', 'update:modelValue', 'pressEnter', 'onBlur', 'onFocus'],
  setup(props, { emit, slots }) {
    const classes = useClass(slots, props);
    const {
      onInput,
      onChange,
      onKeyDown,
      onClearInput,
      onBlur,
      onFocus,
    } = useInput(emit);
    return {
      onInput,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onClearInput,
      classes,
    };
  },
  props,
  render() {
    const {
      $props,
      $slots,
      $props: { allowClear },
      $slots: { prefix, suffix },
      onClearInput,
      onInput,
      onBlur,
      onFocus,
      onChange,
      modelValue,
      classes,
    } = this;
    /**
     * 渲染前缀图标
     * @returns
     */
    const renderPrefix = () => {
      if (!prefix) return;
      return <span class="p-input-prefix">{renderSlot($slots, 'prefix')}</span>;
    };
    /**
     * 渲染后缀图标
     * @returns
     */
    const renderSuffix = () => {
      if (!suffix || allowClear) return;
      return <span class="p-input-suffix">{renderSlot($slots, 'prefix')}</span>;
    };
    /**
     * 渲染清空图标
     * @returns
     */
    const renderClear = () => {
      if (!allowClear) return;
      return (
        <span class="p-input-clear" onClick={onClearInput}>
          <p-icon icon="iconqingkong-" />
        </span>
      );
    };
    return (
      <div class="p-input">
        {renderPrefix()}
        <input
          class={classes}
          value={modelValue}
          {...$props}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {renderClear()}
        {renderSuffix()}
      </div>
    );
  },
});
export default Input;
