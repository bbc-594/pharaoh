/*
 * @Author: your name
 * @Date: 2021-02-23 09:57:42
 * @LastEditTime: 2021-02-23 10:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/icon/src/props.js
 */
export const props = {
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: [Number, String],
    default: 20,
  },
  style: {
    type: Object,
    default: () => {},
  },
};
