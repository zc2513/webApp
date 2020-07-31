<template>
  <div class="home">
    <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    fixed
    placeholder 
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" />
    <HelloWorld :msg="`${key}12`" /> 
    <HelloWorld :msg="`${key}12`" /> 
    <HelloWorld :msg="`${key}12`" />  
  </div>
</template>

<script>
import { NavBar } from 'vant';
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Toast } from 'vant';

export default {
  name: "Home",
  components: {
    HelloWorld,
    [NavBar.name]: NavBar 
  },
  data() {
    return {
      key: "首页",
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>
