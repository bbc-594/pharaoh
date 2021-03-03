/*
 * @Author: your name
 * @Date: 2021-02-05 13:55:28
 * @LastEditTime: 2021-03-03 09:50:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/index.js
 */
import Button from './button/src/button.jsx';
import Input from './input/src/input.jsx';
import Icon from './icon/src/icon.jsx';
import '../style/button.less';
import '../style/input.less';
import '../style/icon.less';
const components = [Button, Input, Icon];
const install = (app, opts = {}) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
  console.log('opts :>> ', opts);
  // app.$prototype.$PBT = {
  //     size: opts.size || "",
  //     zIndex: opts.zIndex || 1000
  // }
};
export default {
  // 全局导出
  version: '1.0.0',
  install,
  Button, // 单独导出button用于按需加载
  Input,
  Icon,
};
