<template>
  <tiny-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="运气真好！！！">
    <h3>hello pull-refresh</h3>
  </tiny-pull-refresh>
</template>

<script lang="jsx">
import { PullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyPullRefresh: PullRefresh
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
