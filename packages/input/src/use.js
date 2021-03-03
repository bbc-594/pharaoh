/*
 * @Author: bbc-594
 * @Date: 2021-03-03 08:46:59
 * @LastEditTime: 2021-03-03 09:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/input/src/useInput.js
 */
import { computed } from 'vue';
export const useInput = (emit) => {
  /**
   * @description: 输入事件
   * @param {*}
   * @return {*}
   */
  const onInput = (e) => {
    const {
      target: { value },
    } = e;
    emit('update:modelValue', value);
  };
  /**
   * @description: 失去焦点事件
   * @param {*} onBlur
   * @return {*}
   */
  const onBlur = (e) => {
    emit('onBlur', e);
  };
  /**
   * @description: 聚焦事件
   * @param {*} onFocus
   * @return {*}
   */
  const onFocus = (e) => {
    emit('onFocus', e);
  };
  /**
   * @description: 改变事件
   * @param {*}
   * @return {*}
   */
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    emit('change', value);
  };
  /**
   * @description: 回车事件
   * @param {*}
   * @return {*}
   */
  const onKeyDown = (e) => {
    const {
      keyCode,
      target: { value },
    } = e;
    if (keyCode === 13) {
      emit('pressEnter', value);
    }
  };

  /**
   * @description: 清空输入框
   * @param {*}
   * @return {*}
   */
  const onClearInput = () => {
    emit('update:modelValue', '');
  };
  return {
    onInput,
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
    onClearInput,
  };
};

export const useClass = (slots, props) => {
  const { allowClear } = props;
  return computed(() => {
    const classes = [];
    Object.keys(slots).forEach((slot) => {
      classes.push(`p-${slot}`);
    });
    if (allowClear) classes.push(`p-clear`);
    return classes;
  });
};
