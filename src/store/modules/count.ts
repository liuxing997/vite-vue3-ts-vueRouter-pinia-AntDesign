import { defineStore } from "pinia";

// 计数接口
export interface countState {
  count: number;
}

// 存取计数
export const useCountStore = defineStore({
  // persist:false,  // 用于无需持久化的模块
  persist: {
    // 用于需要持久化的模块
    key: "count",
    // 保存的位置
    // storage: window.sessionStorage, // 注释本行默认使用 localStorage
  },
  id: "count",
  state: (): countState => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    setCount(count: number) {
      this.count = count;
    },
  },
});
