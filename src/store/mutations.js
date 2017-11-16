export default {
  finish(state, itemId) {
    const index = state.todo_items.findIndex((item) => item.id === itemId)
    state.todo_items.splice(index, 1)
  },
  updateItem(state, itemMessage) {
    state.item = { id: state.id, text: itemMessage }
  },
  add(state) {
    state.todo_items.push(state.item)
    state.item = { id: null, text: null }
    state.id++
  }
}
