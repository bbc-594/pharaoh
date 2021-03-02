/*
 * @Author: your name
 * @Date: 2021-02-23 09:57:27
 * @LastEditTime: 2021-02-24 11:19:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/icon/index.js
 */
import Icon from './src/icon.jsx';
import '../../style/icon.less';

Icon.install = (app) => {
  app.component(Icon.name, Icon);
};

export default Icon;
