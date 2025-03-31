<template>
  <div>
    <div>
      <div>
        <input
          type="text"
          id="msg"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          keyup.enter="addTodoHandler"
        />
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputTodo',
  // emits는 최상위 속성으로 작성합니다.

  // data() 함수는 순수하게 데이터 객체만 반환해야 합니다.
  data() {
    return {
      todo: '',
    };
  },
  emits: ['add-todo'],
  // methods도 최상위 속성입니다.
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        this.$emit('add-todo', this.todo);
        this.todo = '';
      }
    },
  },
};
</script>
