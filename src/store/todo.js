
const state = {
  todos: [],
};

const getters = {
  todos: state => state.todos,
};

const mutations = {
  createdTodo(state, { todo }) {
    state.todos.push(todo);
  },
  deleteTodo(state, { index }) {
    state.todos.splice(index, 1);
  },
};

const actions = {
  createTodo({ commit }, { todo }) {
    commit('createdTodo', { todo });
  },
  deleteTodo({ commit }, { index }) {
    commit('deleteTodo', { index });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
