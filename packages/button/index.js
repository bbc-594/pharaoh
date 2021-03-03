/*
 * @Author: your name
 * @Date: 2021-02-05 13:39:48
 * @LastEditTime: 2021-03-03 09:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/button/index.js
 */
import PButton from './src/button';
import '../../style/button.less';

PButton.install = (app) => {
  // 组件install 属性
  app.component(PButton.name, PButton); // vue3 定义组件
};

export default PButton;
