import { defineComponent } from 'vue';
import { props } from './props';
const Icon = defineComponent({
  name: 'PIcon',
  emits: ['click'],
  props,
  setup(props, { emit }) {
    const onClick = () => {
      emit('click');
    };
    return {
      onClick,
    };
  },
  render() {
    const { size, onClick, style, icon } = this;
    return (
      <div class="p-icon">
        <svg
          class="icon"
          aria-hidden="true"
          width={size}
          height={size}
          onClick={onClick}
          style={style}
        >
          <use xlink:href={`#${icon}`} />
        </svg>
      </div>
    );
  },
});
export default Icon;
