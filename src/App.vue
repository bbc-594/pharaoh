<!--
 * @Author: your name
 * @Date: 2021-02-05 11:42:47
 * @LastEditTime: 2021-03-02 16:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/src/App.vue
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <p-button type="primary" @click="onClick">测试按钮</p-button>
  <p-input v-model="value" allowClear @pressEnter="onClick">
    <template v-slot:prefix>
      <p-icon icon="iconsousuo"/>
    </template>
    <template v-slot:suffix>
       <p-icon icon="iconsousuo"/>
    </template>
  </p-input>
  <p-icon icon="iconsousuo"></p-icon>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      value: ""
    }
  },
  methods: {
    onClick () {
      console.log('clo :>> ', );
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
