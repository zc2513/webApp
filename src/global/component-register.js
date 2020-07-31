// 全局组件注册
import Vue from 'vue'
const path = require('path')
const files = require.context('@/components/global', false, /\.vue$/)

files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  Vue.component(name, files(key).default || files(key))
})

