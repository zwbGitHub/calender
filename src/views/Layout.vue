<template>
  <my-header>{{ headerTitle }}</my-header>
  <search :placeholder="placeholder" :maxlength="maxlength" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <tab />
</template>
<script>
import myHeader from '../components/header'
import Tab from '../components/tab'
import Search from '../components/search'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
export default {
  components: {
    myHeader,
    Tab,
    Search
  },
  setup() {
    const store = useStore(),
      state = store.state
    const router = useRouter()
    onMounted(() => {
      router.push('/day')
      store.commit('GetPlaceholder', 'day')
    })
    // 使用watch监视路由path值的变化
    watch(
      () => {
        return router.currentRoute.value.name
      },
      value => {
        store.commit('GetTitle', value)
        store.commit('GetPlaceholder', value)
        store.commit('GetMaxLength', value)
      }
    )
    return computed(() => state).value
  }
}
</script>
