import { defineComponent, ref, renderSlot } from 'vue';
import { props } from './props';
import { useClass, useButton } from './use';
const Button = defineComponent({
  name: 'PButton',
  setup(props, { emit }) {
    const str = ref('确认');
    const { onClick } = useButton(emit);
    const classes = useClass(props);
    return {
      str,
      classes,
      onClick,
    };
  },
  props,
  render() {
    const { onClick } = this;
    return (
      <div class="p-button" class={this.classes}>
        <button disabled={this.disabled} onClick={onClick}>
          {renderSlot(this.$slots, 'default')}
        </button>
      </div>
    );
  },
});

export default Button;
