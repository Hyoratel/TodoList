<template>
  <div class="row">
    <div class="col">
      <ul class="List-group">
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todoItem="todo"
          @delete-todo="$emit('delete-todo', $event)"
          @toggle-completed="$emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todoList: { type: Array, required: true },
  },
  emits: ['delete-todo', 'toggle-completed'],
};
</script>
