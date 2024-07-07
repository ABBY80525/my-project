import { createStore } from 'vuex';

export default createStore({
  state: {
    listA: ['Item1', 'Item3', 'Item4', 'Item6', 'Item7'],
    listB: ['Item2', 'Item5'],
  },
  mutations: {
    transferItem(state, { fromList, toList, item }) {
      const index = state[fromList].indexOf(item);
      if (index > -1) {
        state[fromList].splice(index, 1);
        state[toList].push(item);
      }
    },
  },
});
