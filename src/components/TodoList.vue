<template></template>
<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todoList: { type: Array, required: true },
  },
};
</script>
