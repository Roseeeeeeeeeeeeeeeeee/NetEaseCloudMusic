// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    // 定义状态
    return{
      PageNumber : 0,
      SubNumber  : 0,
    }
   
    
  },
  mutations: {
    // 定义突变
   
  },
  actions: {
    // 定义动作
  },
  getters: {
    // 定义获取器
  }
})
