<template>
  <div class="row">
    <div class="col">
      <ul class="List-group">
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todoItem="todo"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem2.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todoList: { type: Array, required: true },
  },
};
</script>
