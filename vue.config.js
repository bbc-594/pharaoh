/*
 * @Author: your name
 * @Date: 2021-02-05 13:33:58
 * @LastEditTime: 2021-02-07 16:23:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/vue.config.js
 */
const isProd = process.env.NODE_ENV === "production";
const fs = require("fs");
const path = require("path");
function resolve(filePath) {
    return path.join(__dirname, filePath);
}
const getEntries = dir => {
    // 整理需要按需加载的文件,dir为各组件所在的共同目录
    let absolutionPath = path.resolve(dir); // 绝对路径
    let sonFiles = fs.readdirSync(absolutionPath); // 读取第一层级的子元素文件,就是每个组件的包文件名
    let entries = {};
    sonFiles.forEach(file => {
        let fileDirPath = path.join(absolutionPath, file); // 路径拼接，得到组件所在地址
        if (fs.statSync(fileDirPath).isDirectory()) { // 判断是否文件夹
            let filePath = path.join(fileDirPath, "index.js") // 得到组件所在路径，得到文件地址
            entries[file] = filePath
        }
    })
    return entries
}
const commonConfig = {
    publicPath: '/',
    devServer: {
    //  host: 'dev.pharaoh.com',
     port: 8080,
     disableHostCheck: true
    },
    chainWebpack: config => {
        config.resolve.alias
        .set("packages", resolve("packages"))
        .set("comp", resolve("src/components"))
        .set("style", resolve("style"))
    }
}
let buildConfig = {}
// 按需加载 (build命令&&后第二个脚本,为按需加载打包)
const args = process.argv.slice(2);
if (isProd && args.includes("--pharaoh")) { // pharaoh是自定义属性, 为的是标识当前脚本是执行按需加载配置的
    // 生产环境 && 按需加载
    buildConfig = {
        outputDir: "dist", // 导出目录
        configureWebpack: { // webpack配置
            entry: {
                ...getEntries("./packages") // 传入打包文件所在目录，通过函数遍历出各个组件的入口函数
            },
            output: { // 组件使用者借助babel-plugin-import来实现按需导入
                filename: "lib/[name]/index.js", //导出到对应名字的文件夹下的index.js
                libraryTarget: "umd", // 打包规范umd(将 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量)
                libraryExport: "default", // 导出格式 - 默认导出
                library: ["pharaoh", "[name]"] // 打包的库名，会挂载在window上：window.pharaoh，其作为一个对象，内部还有多组件的[name]属性，如window.pharaoh.button
            },
            externals: {
                vue: {
                    root: "Vue", // 指向全局变量,
                    commonjs: "vue",
                    commonjs2: "vue",
                    amd: "vue"
                }
            },
        },
        css: { // 抽离css
            sourceMap: true, // 源码映射
            extract: {
                filename: "css/[name]/style.css" // 抽离css
            }
        },
        chainWebpack: config => {
            // 去掉默认的不必要配置
            config.optimization.delete('splitChunks')
            config.plugins.delete('copy')
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
            config.plugins.delete('html')
            config.plugins.delete('hmr') // 热更新
            config.entryPoints.delete('app')
        }
    }
}
module.exports = !isProd ? commonConfig : Object.assign(commonConfig, buildConfig)
