<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <month-list :data="monthDate"></month-list>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import getAllRequset from '../services/index'
import { getNowDate } from '@/libs/utils.js'
import { useStore } from 'vuex'
import ErrorTip from '../components/error-tip'
import MonthList from '../components/MonthPage/List'
export default {
  name: 'Month',
  components: {
    ErrorTip,
    MonthList
  },
  setup() {
    const store = useStore(),
      state = store.state
    onMounted(() => {
      getAllRequset('month', getNowDate('month'), store)
    })
    return {
      errorCode: computed(() => state.errorCode),
      monthDate: computed(() => state.monthDate)
    }
  }
}
</script>

<style></style>
