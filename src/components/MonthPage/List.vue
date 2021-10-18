<template>
  <div class="month-list">
    <ul v-for="(item, index) of data" :key="index">
      <card-item :item="item"></card-item>
    </ul>
  </div>
</template>

<script>
import CardItem from './Item.vue'
export default {
  name: 'MonthList',
  props: {
    data: Array
  },
  components: {
    CardItem
  }
}
</script>

<style>
.month-list {
  padding: 0.15rem;
  box-sizing: border-box;
}
</style>
