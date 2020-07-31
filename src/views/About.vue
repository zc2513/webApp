<template>
  <div class="about">
    <h1>关于配置</h1>
    <p>编辑器配置： .editorconfig</p>
    <p>代码规则配置：.eslintrc.js</p>
    <p>git提交配置：.gitignore</p>
    <p>兼容配置：.browserslistrc</p>
    <p>项目依赖及其它配置：.package.json</p>
    <p>描述文件：readme.md</p>
    <p>vue 配置：vue.config.js</p>
    <p>依赖锁定：.lock</p>
    <div>
      <h4>babel配置：babel.config.js</h4>
      <h6>js代码转换配置:</h6>
      <p>
        module.exports = {
        presets: ['@vue/cli-plugin-babel/preset']
        }
      </p>
      <h6>vant按需加载:</h6>
      <ul>
        <li>命令：npm i babel-plugin-import -D</li>
        <li>
          配置：
          module.exports = {
          presets: ['@vue/cli-plugin-babel/preset'],
          plugins: [
          [
          'import',
          { libraryName: 'vant', libraryDirectory: 'es', style: true },
          'vant'
          ]
          ]}
        </li>
      </ul>
    </div>
    <div>
      <h4>yarn 基本命令</h4>
      <ul>
        <li>yarn / yarn install 等同于npm install 批量安装依赖</li>
        <li>yarn add xxx 等同于 npm install xxx —save 安装指定包到指定位置</li>
        <li>yarn remove xxx 等同于 npm uninstall xxx —save 卸载指定包</li>
        <li>yarn add xxx —dev 等同于 npm install xxx —save-dev</li>
        <li>yarn upgrade 等同于 npm update 升级全部包</li>
        <li>yarn global add xxx 等同于 npm install xxx -g 全局安装指定包</li>
      </ul>
    </div>
    <div>
      <h4>自适应配置：rem.js 字体转换utils/rem.js</h4>
      <ul>
        <li>rem.js使用 入口文件(main.js)引入即可</li>
        <li>需要依赖1：postcss-pxtorem 或 postcss-px2rem --> 是一款 postcss 插件，用于将单位转化为 rem</li>
        <li>需要依赖1 自动补全配置：autoprefixer()</li>
        <li>
          需要依赖2：amfe-flexible -->flexible会动态给页面header中添加
          <meta name="viewport" />标签，所以务必请把目录 public/index.html 中的这个标签删除
        </li>
      </ul>
    </div>
    <div>
      <h4>浏览器默认样式重置及全局less变量配置</h4>
      <ul>
        <li>第三方依赖：normalize.css</li>
        <li>下载命令：yarn add normalize.css -S || npm i normalize.css -S</li>
        <li>npm形式项目使用：入口文件 import 'normalize.css';</li>
        <li>
          cdn引入：注释
          <!-- <link href="https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"> -->
        </li>
        <li>下载地址：注释 <!-- https://necolas.github.io/normalize.css/latest/normalize.css --></li>
        <li>
          <h6>normalize特点:</h6>
          <p>1.保护有用的浏览器默认样式而不是完全去掉它们</p>
          <p>2.一般化的样式：为大部分HTML元素提供</p>
          <p>3.修复浏览器自身的bug并保证各浏览器的一致性</p>
          <p>4.优化CSS可用性：用一些小技巧</p>
        </li>
      </ul>
      <h6>vue-cli3 配置全局less 、sass 变量</h6>
      <ul>
          <li>命令：vue add style-resources-loader</li>
          <li>vue.config.js 配置 less：   
            const path = require("path");
            module.exports = {
                ...
                pluginOptions: {
                    "style-resources-loader": {
                        preProcessor: "less",
                        patterns: [
                        //这个是加上自己的路径，
                        //注意：试过不能使用别名路径
                        path.resolve(__dirname, "./src/assets/variable.less")
                        ]
                    }
                }
                ...
            }
        </li>
        <li>
            vue.config.js 配置 scss:
              module.exports = {
                ...
                css: {
                    loaderOptions: {
                        sass: {
                        // @是src的别名
                        data: `
                            @import "@/assets/variable.scss";
                        `
                        }
                    }
                }
                ...
            }
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default { };
</script>
<style lang="less">
.about {
  h1 {
    text-align: center;
    color: #00f;
  }
  h6 {
    text-indent: 2rem;
  }
  p {
    text-indent: 4rem;
    color: @blue;
  }
}
</style>
