import { defineComponent } from 'vue';
import { props } from './props';
const ENTER_KEY = 13; // 回车按键
const Input = defineComponent({
  name: 'PInputSearch',
  emits: ['change', 'update:modelValue', 'pressEnter'],
  setup(props, { emit }) {
    // const {} = toRef(props);
    // const value = ref("");
    const onInput = (e) => {
      const {
        target: { value },
      } = e;
      emit('update:modelValue', value);
    };
    const onChange = (e) => {
      const {
        target: { value },
      } = e;
      emit('change', value);
    };
    const onKeyDown = (e) => {
      const {
        keyCode,
        target: { value },
      } = e;
      if (keyCode === ENTER_KEY) {
        emit('pressEnter', value);
      }
    };
    return {
      onInput,
      onChange,
      onKeyDown,
    };
  },
  props,
  render() {
    const { $props } = this;
    return (
      <div class="p-input p-input-search">
        <input {...$props} />
        <span class="suffix">
            <p-icon icon="iconsousuo"/>
        </span>
      </div>
    );
  },
});
export default Input;
