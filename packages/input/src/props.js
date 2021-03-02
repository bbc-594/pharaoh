/*
 * @Author: your name
 * @Date: 2021-02-23 09:48:24
 * @LastEditTime: 2021-03-02 16:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/input/src/props.js
 */
export const props = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入文本...',
  },
  defaultValue: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  allowClear: {
    type: Boolean,
    default: false
  },
  maxLength: String || Number,
};
