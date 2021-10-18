<template>
  <router-link :to="item.path" class="tab-icon">
    <i class="icon">{{ item.date }}</i>
    <p class="text">
      {{ item.title }}
    </p>
  </router-link>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="less">
.tab-icon {
  display: inline-block;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: #ddd;
    color: #999;
    font-size: 0.12rem;
    transition: all 0.5s;
  }

  .text {
    font-size: 0.12rem;
    text-align: center;
    margin-top: 0.02rem;
    color: #999;
    transition: color 0.5s;
  }
  // 路由跳转时会给跳转元素自动添加此类名，所以可以通过设置此类名来改变跳转时的样式 
  &.router-link-active {
    .icon {
      background-color: #ed4040;
      color: #fff;
    }
    .text {
      color: #ed4040;
    }
  }
}
</style>
