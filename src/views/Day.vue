<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card :data="data" />
      <day-list :data="data" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import getAllRequset from '../services/index'
import { getNowDate } from '@/libs/utils.js'
import { useStore } from 'vuex'
import Card from '../components/card'
import DayList from '../components/day-list'
import ErrorTip from '../components/error-tip'
export default {
  name: 'Day',
  components: {
    Card,
    DayList,
    ErrorTip
  },
  setup() {
    const store = useStore(),
      state = store.state

    onMounted(() => {
      getAllRequset('day', getNowDate('day'), store)
    })
    return {
      data: computed(() => state.dayDate),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style></style>
