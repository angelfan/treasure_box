import axios from '@/utils/axios'

export default {
  getTodoItems() {
    return axios.get('api/todo_items.json')
  },
  creteTodoItem(payload) {
    return axios.post('api/todo_items.json', { todo_item: { content: payload.content }})
  },
  deleteTodoItem(payload) {
    return axios.delete(`api/todo_items/${payload.item_id}.json`)
  },
  clearTodoItems() {
    return axios.delete('api/todo_items/clear')
  },
  toggleTodoItems(payload) {
    return axios.put(`api/todo_items/${payload.item.id}/toggle.json`)
  }
}
