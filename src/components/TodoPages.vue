<template>
  <div class="container">
    <h2> 구매희망 도서 신청 </h2>
    <div class="input-group" style="margin-bottom:10px;">
      <input type="text" class="form-control" placeholder="희망하는 도서의 제목을 입력하세요">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button"> 신청 </button>
      </span>
    </div>
    <ul class="list-group">
      <li class="list-group-item">
        구매 희망 도서 Lists
        <div class="btn-group pull-right" style="font-size: 12px line-height: 1;">
            <button type="button" class="btn-link dropdown-toggle"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              더보기 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">삭제</a>
              </li>
            </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoPages',
  data() {
    return {
      msg: 'welcome. Todo page',
    };
  },
  mounted() {
    console.log('component has mounted');
  },
};
</script>

<style>

</style>
