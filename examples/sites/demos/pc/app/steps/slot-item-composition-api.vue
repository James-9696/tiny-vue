<template>
  <div class="demo-steps-slot-item">
    <div>通过 item 插槽添加自定义图标</div>
    <tiny-steps :data="stepsData">
      <template #item="data">
        <a class="label"
          ><span>{{ data.slotScope.name }}</span></a
        >
        <span>
          <div :class="['dot', data.slotScope.status]">
            <component :is="data.slotScope.status == 'done' ? IconYes : IconClose" class="tiny-svg-size" />
          </div>
        </span>
      </template>
    </tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'
import { iconYes, iconClose } from '@opentiny/vue-icon'

const IconYes = iconYes()
const IconClose = iconClose()
const stepsData = ref([
  {
    name: 'Basic Info',
    count: 3,
    status: 'done'
  },
  {
    name: 'BOQ Info',
    count: 0,
    status: 'done'
  },
  {
    name: 'Involved Parties',
    count: 10,
    status: 'doing'
  },
  {
    name: 'Billing',
    count: 0,
    status: 'done'
  }
])
</script>

<style scoped>
.demo-steps-slot-item {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}

.demo-steps-slot-item > div:not(:last-child) {
  margin: 0 0 20px 0;
}
</style>
