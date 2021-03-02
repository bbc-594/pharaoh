import { defineComponent } from 'vue';
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
      if (keyCode === 13) {
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
      <div class="p-input">
        <input {...$props} />
      </div>
    );
  },
});
export default Input;
