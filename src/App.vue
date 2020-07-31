<template>
  <div id="app"> 
    <router-view />

    <van-tabbar route fixed placeholder >
        <van-tabbar-item replace icon="home-o" to="/home">
            首页
        </van-tabbar-item>
        <van-tabbar-item replace icon="search" to="/about">
            关于配置
        </van-tabbar-item>
        <van-tabbar-item replace icon="friends-o" to="/shop">
            购买
        </van-tabbar-item>
        <van-tabbar-item replace icon="setting-o" to="/user">
            个人中心
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem 
  } 
}
</script>


<style lang="less">
@import "./assets/less/index";  
</style>
