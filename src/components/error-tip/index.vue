<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.png')" />
    <p>{{ errorData[errorCode] }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import errorData from '@/date/error.js'
export default {
  name: 'ErrorTip',
  setup() {
    const store = useStore(),
      state = store.state
    console.log(state.errorCode)
    return {
      errorCode: computed(() => state.errorCode),
      errorData
    }
  }
}
</script>

<style lang="less" scoped>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 0.5rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>
