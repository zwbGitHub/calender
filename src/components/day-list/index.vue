<template>
  <div class="day-list">
      <day-item title="当前年月"
      :content="data['year-month']"
     />
      <day-item title="今年属相"
      :content ="data.animalsYear"
     />
      <day-item title="农历年份"
       :content ="data.lunar"
     />
      <day-item title="适宜事件"
       :content ="data.suit"
     />
      <day-item title="避免事件"
       :content ="data.avoid"
     />

  </div>
</template>

<script>
import DayItem from '@/components/day-list/Item.vue'
export default {
    name:'DayList',
    components:{
        DayItem
    },
    props:{
        data:Object
    } 
     
}
</script>

<style lang="less" scoped>
.day-list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>