import Api from '@/api/todoList'

const state = {
  todo_items: Array,
  item: Object
}

const getters = {}

const actions = {
  getTodoItems({ commit }) {
    Api.getTodoItems().then(res => {
      commit('todo_items', { todo_items: res.data.todo_items })
    })
  },
  createTodoItem(context, payload) {
    Api.creteTodoItem(payload).then(res => {
      context.commit('addItem', { item: res.data })
    })
  },
  deleteTodoItem(context, payload) {
    Api.deleteTodoItem(payload).then(res => {
      context.commit('deleteItem', payload)
    })
  },
  clearTodoItems(context) {
    Api.clearTodoItems().then(res => {
      context.commit('clear')
    })
  },
  toggleTodoItem(context, payload) {
    Api.toggleTodoItems(payload).then(res => {
      context.commit('toggle', { item: payload.item, finished_item: res.data })
    })
  }
}

const mutations = {
  todo_items(state, payload) {
    state.todo_items = payload.todo_items
  },
  addItem(state, payload) {
    state.todo_items.unshift(payload.item)
    state.item = Object
  },
  deleteItem(state, payload) {
    const index = state.todo_items.findIndex((item) => item.id === payload.item_id)
    state.todo_items.splice(index, 1)
  },
  clear(state) {
    state.todo_items = Array
  },
  toggle(state, payload) {
    payload.item.finished_at = payload.finished_item.finished_at
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
