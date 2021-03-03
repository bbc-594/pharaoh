import { computed, toRefs } from 'vue';
export const useButton = (emit) => {
  const onClick = () => {
    emit('click');
  };
  return {
    onClick,
  };
};
export const useClass = (props) => {
  const { size, shape, ghost, type, block } = toRefs(props);
  const classes = [];
  return computed(() => {
    classes.push(`p-button-${size.value}`);
    if (shape.value) classes.push(`p-button-${shape.value}`);
    if (ghost.value) classes.push(`p-button-ghost`);
    if (type.value) classes.push(`p-button-${type.value}`);
    if (block.value) classes.push(`p-button-block`);
    return classes;
  });
};
