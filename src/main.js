/*
 * @Author: your name
 * @Date: 2021-02-05 11:42:47
 * @LastEditTime: 2021-02-07 17:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/src/main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import Pharaoh from "../packages/index";
import "pharaohqy/dist/pharaoh.css";
// import "pharaohqy/dist/css/button/style.cs";
let app = createApp(App);
app.use(Pharaoh).mount("#app");
// createApp(App).use(Pharaoh).mount("#app");
