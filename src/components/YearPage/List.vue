<template>
    <div class="year-list">
        <ul>
            <card-item v-for="(item,index) of data" :key="index"
            :item="item"></card-item>
        </ul>
    </div>
</template>

<script>
import CardItem from './item.vue'
export default {
    name:'YearList',
    components:{
        CardItem
    },
    props:{
        data:Array
    }
}
</script>

<style>
.year-list {
  padding: 0.15rem;
  box-sizing: border-box;
}
</style>