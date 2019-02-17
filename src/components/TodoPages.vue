<template>
<div class="container">
  <h2>구매 희망 도서</h2>
  <div class="input-group" style="margin-bottom:10px;">
    <input type="text" class="form-control"
            placeholder="도서명을 입력하세요"
            v-model="name"
            v-on:keyup.enter="createTodo(name)">
    <span class="input-group-btn" >
      <button class="btn btn-default" type="button"
        @click="createTodo(name)">추가</button>
    </span>
  </div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, index) in todos" :key="`todo-${index}`">
    {{todo.name}}
      <div class="btn-group pull-right"
        style="font-size: 12px; line-height: 1;">
        <button type="button"
        class="btn-link dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
          더보기 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#" @click="deletetodo(index)">삭제</a>
            <!-- 삭제기능 methods 에서 구현 deletetodo -->
          </li>
          <li><a href="#">변경(TBD)</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  methods: {
    deletetodo(i) {
      this.todos.splice(i, 1);
    },
    createTodo(name) {
      if (name != null) {
        this.todos.push({
          name,
        });
        this.name = null;
      }
    },
  },
  name: 'TodoPage',
  data() {
    return {
      name: '',
      todos: [
        {
          name: '신청도서 1',
        },
        {
          name: '신청도서 2',
        },
        {
          name: '신청도서 3',
        },
        {
          name: '신청도서 4',
        },
      ],
    };
  },
};
</script>

<style>

</style>
