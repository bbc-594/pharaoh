import { defineComponent, renderSlot} from 'vue';
import { props } from './props';
const Input = defineComponent({
  name: 'PInput',
  emits: ['change', 'update:modelValue', 'pressEnter'],
  setup(props, { emit }) {
    // const {} = toRef(props);
    // const value = ref("");
    const onInput = (e) => {
      const {
        target: { value },
      } = e;
      console.log('value :>> ', value);
      emit('update:modelValue', value);
    };
    const onChange = (e) => {
      const {
        target: { value },
      } = e;
      console.log('value :>> ', value);
      emit('change', value);
    };
    const onKeyDown = (e) => {
      const {
        keyCode,
        target: { value },
      } = e;
      if (keyCode === 13) {
        emit('pressEnter', value);
      }
    };
    const onClearInput = () => {
      console.log('click :>> ', );
      emit('update:modelValue', '');
    }
    return {
      onInput,
      onChange,
      onKeyDown,
      onClearInput
    };
  },
  props,
  watch: {
    modelValue(value) {
      console.log('value :>> ', value);
      this.value = value;
    }
  },
  render() {
    const { $props, $slots, $props: {allowClear}, $slots: {prefix, suffix}, onClearInput, onInput, onChange, modelValue } = this;
    const classes = [];
    Object.keys($slots).forEach(slot => {
      classes.push(`p-${slot}`)
    })
    if (allowClear) classes.push(`p-clear`)
    /**
     * 渲染前缀图标
     * @returns
     */
    const renderPrefix = () => {
      if (!prefix) return;
      return (<span class="p-input-prefix">
                 {renderSlot($slots, "prefix")}
              </span>)
    }
    /**
     * 渲染后缀图标
     * @returns
     */
    const renderSuffix = () => {
      if (!suffix || allowClear) return; 
      return (<span class="p-input-suffix">
                 {renderSlot($slots, "prefix")}
              </span>)
    }
    /**
     * 渲染清空图标
     * @returns
     */
    const renderClear =() => {
      if (!allowClear) return;
      return (<span class="p-input-clear" onClick={onClearInput}>
        <p-icon icon="iconqingkong-"/>
      </span>)
    }
    return (
      <div class="p-input">
        {renderPrefix()}
        <input class={classes} value={modelValue} {...$props} onInput={onInput} onChange={onChange}/>
        {renderClear()}
        {renderSuffix()}
      </div>
    );
  },
});
export default Input;
