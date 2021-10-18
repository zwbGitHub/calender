<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
     <year-list :data="yearDate"></year-list>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getAllRequset from '../services/index'
import { getNowDate } from '@/libs/utils.js'
import { useStore } from 'vuex'
import ErrorTip from '../components/error-tip'
import YearList from '../components/YearPage/List'
export default {
  name: 'Year',
  components: {
    ErrorTip,
    YearList
  },
  setup() {
    const store = useStore(),
      state = store.state
    onMounted(() => {
      getAllRequset('year', getNowDate('year'), store)
    })
    return {
      errorCode: computed(() => state.errorCode),
      yearDate:computed(()=>state.yearDate)
    }
  }
}
</script>

<style></style>
