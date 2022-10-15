<script setup>

</script>

<template>
  <div class="message">
    <div class="box1"></div>
    <div class="box2">
      <div class="item1">今天是个好日子好日子今天是个好日子好日子</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .message {
    display: flex;
    width: 100%;
    height: 300px;
    padding: 0 20px;
    box-sizing: border-box;

    .box1 {
      flex-shrink: 0;
      width:50px;
      background-color: aqua;
    }

    .box2 {
      flex: 1;
      display: flex;
      align-items: center;
      padding-right: 20px;
      background-color: aquamarine;
      overflow: hidden;
      
      .item1 {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item {
        flex-shrink: 0;
        width: 50px;
        margin-left: 10px;
        background-color: blanchedalmond;
      }
    }
  }
</style>