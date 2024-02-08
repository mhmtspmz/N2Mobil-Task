import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedId: null
  },
  mutations: {
    setSelectedId(state, id) {
      state.selectedId = id;
    }
  }
});
