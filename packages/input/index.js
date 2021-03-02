/*
 * @Author: your name
 * @Date: 2021-02-07 17:21:00
 * @LastEditTime: 2021-02-23 09:51:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/input/index.js
 */
import Input from './src/input.jsx';
import '../../style/input.less';

Input.install = (app) => {
  // 组件install 属性
  app.component(Input.name, Input); // vue3 定义组件
};

export default Input;
