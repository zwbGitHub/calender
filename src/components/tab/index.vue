<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) in TabDate" :key="index">
      <icon :item="item"/>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import TabDate from "../../date/tab";
import { toRefs, reactive } from "vue";
export default {
  name: "Tab",
  components: {
    Icon,
  },
  setup() {
    const state = reactive({
      TabDate,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>
