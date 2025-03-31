<template>
  <div id="app" class="container">
    <div class="card card -body bg -light">
      <div classe="title">:: Todolist App</div>
    </div>
    <div class="card card -default card -borderless">
      <div class="card -body">
        <InputTodo @add-todo="addTodo" />
        <!-- 바인딩을 통해 부모 컴포넌트 데이터를 자식에게 전달 -->
        <TodoList
          :todoList="todos"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime();

export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todos: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        });
      }
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((Item) => id === Item.id);
      // splice를 사용하여 배열을 수정하면 Vue가 해당 변경을 인식하고 UI를 적절히 업데이트 가능, 제거동작을 할때 2개가 제거되거나 하는 상황을 방지.
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((Item) => id === Item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
};
</script>
