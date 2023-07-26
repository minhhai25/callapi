import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vue.Store({
  state: {
    category: [],
  },
  mutations: {
    SET_CATE(state, newCate) {
      state.category.push(newCate);
      console.log(state.category);
    },
  },
  actions: {},
});
export default store;
