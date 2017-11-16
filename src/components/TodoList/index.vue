<template>
  <section class="todoapp">
    <!-- input -->
    <div class="todo-input">
      <el-input autofocus placeholder="请输入内容" v-model="content" class="input-with-select" @keyup.enter="adItem">
        <el-select v-model="category_selected" slot="prepend" placeholder="请选择">
          <el-option v-for="category in categories" key="category.id" :label='category.name' :value="category.id">{{ category.name }}</el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-circle-check-outline" @click="adItem"></el-button>
      </el-input>
    </div>

    <!-- main section -->
    <section class="main" v-show="todo_items.length">
      <ul class="todo-list">
        <todo v-for="todo in filtered_items"
              :key="todo.id"
              :todo="todo">
        </todo>
      </ul>
    </section>

    <!-- footer -->
    <footer class="footer" v-show="todo_items.length">
      <ul class="filters">
        <li v-for="(val, key) in filters" :key="key">
          <a :class="{ selected: filter_key === key }" @click.prevent="filter_key = key">{{ key }}</a>
        </li>
      </ul>
      <button class="clear-completed" v-show="todo_items.length > 1" @click="clearCompleted">
        清除所有
      </button>
    </footer>
  </section>
</template>

<script>
  import Todo from './Todo.vue'

  const filters = {
    '所有': todos => todos,
    '未完成': todos => todos.filter(todo => !todo.finished_at),
    '已完成': todos => todos.filter(todo => todo.finished_at)
  }
  export default {
    components: {
      'todo': Todo
    },
    data() {
      return {
        filters,
        filter_key: '所有',
        content: '',
        category_selected: '',
        categories: [
          { id: 1, name: '工作' },
          { id: 2, name: '学习' }
        ]
      }
    },
    created() {
      this.$store.dispatch('getTodoItems')
    },
    methods: {
      adItem() {
        this.$store.dispatch('createTodoItem', { content: this.content })
        this.content = ''
        this.filter_key = '所有'
      },
      clearCompleted() {
        this.$store.dispatch('clearTodoItems')
      }
    },
    computed: {
      todo_items() {
        return this.$store.state.todoList.todo_items
      },
      filtered_items() {
        return filters[this.filter_key](this.todo_items)
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss';
  .el-select .el-input {
    width: 100px;
  }
  .todo-input {
    text-align: center
  }
  .popper__arrow {
    left: 50px !important;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
