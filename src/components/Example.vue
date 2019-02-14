// component는 기본적으로 3가지를 가져야함 template, script, style

<template>
  <div class="panel panel-default">
    <div class="panel-heading">panel heading without Title</div>
    <div class="panel-body">
      panel contents
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello Example',
  data() {
    return {
      msg: 'basic panel Example page',
    };
  },
};
</script>

<style>
</style>
