<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于配置</router-link>
      <router-link to="/shop">购买</router-link>
      <router-link to="/user">个人中心</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import "./assets/less/index";
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  a {
    width: calc(100% / 4px);
    color: #9d9da7;
    &.router-link-exact-active {
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
