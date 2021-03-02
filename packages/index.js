/*
 * @Author: your name
 * @Date: 2021-02-05 13:55:28
 * @LastEditTime: 2021-02-08 10:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/index.js
 */
import PButton from "./button/src/button.vue";
import Input from "./input/src/input.vue";
import "../style/button.less";
import "../style/input.less";
const components = [
    PButton,
    Input
];
const install = (app, opts = {}) => {
    components.forEach(item => {
        app.component(item.name, item);
    })
    console.log('opts :>> ', opts);
    // app.$prototype.$PBT = {
    //     size: opts.size || "",
    //     zIndex: opts.zIndex || 1000
    // }
};
export default { // 全局导出
    version: "1.0.0",
    install,
    PButton,
    Input // 单独导出button用于按需加载
}