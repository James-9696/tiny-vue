<template>
  <div class="tiny-ip-segmentation-box"></div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/ip-segmentation-box/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'configs', 'disabled'],
  emits: ['change', 'blur', 'focus'],
  components: {},
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
