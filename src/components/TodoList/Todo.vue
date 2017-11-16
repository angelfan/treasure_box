<template>
  <li class="todo" :class="{ completed: todo.finished_at }">
    <div class="view">
      <input class="toggle"
             type="checkbox"
             :checked="todo.finished_at"
             @change="toggleTodo(todo)">
      <label v-text="todo.content" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo(todo.id)"></button>
    </div>
    <input class="edit"
           v-show="editing"
           v-focus="editing"
           :value="todo.text">
  </li>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      todo: Object
    },
    data() {
      return {
        editing: 'false'
      }
    },
    directives: {
      focus(el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            el.focus()
          })
        }
      }
    },
    methods: {
      deleteTodo(itemId) {
        this.$store.dispatch('deleteTodoItem', { item_id: itemId })
      },
      finish(item) {
        this.$store.dispatch('finishTodoItem', { item: item })
      },
      toggleTodo(item) {
        this.$store.dispatch('toggleTodoItem', { item: item })
      }
    }
  }
</script>
