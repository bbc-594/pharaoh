/*
 * @Author: your name
 * @Date: 2021-02-07 10:05:34
 * @LastEditTime: 2021-02-07 17:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/docs/.vuepress/config.js
 */
module.exports = {
    title: 'pharaoh', // 设置网站标题
    description: '清园组件库——pharaoh',
    base: "/",
    dest: './build', // 输出目录
    repo: "pharaoh",
    header: [
        [
            
        ]
    ],
    themeConfig: {
      nav: [
        { test: '主页', link: '/' },
        { test: '联系我', link: '/' },
        { test: '源码', link: '/' },
      ],
      sidebar: [
        {
          text: 'Icon图标', // 必要的
          link: '/icon/', // 可选的，标题的跳转链接，应为绝对路径且路径正确
          collapsable: false, // 可选的，默认为true
          sidebarDepth: 1 // 可选的，默认1
        },
        {
          text: 'Button按钮',
          link: '/button/',
          collapsable: false,
          sidebarDepth: 1
        }
      ]
    }
  }