<template>
  <div>
    <p>场景1：组件默认过滤</p>
    <tiny-select v-model="value1" ref="selectRef" filterable>
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
    <p>场景2：自定义过滤</p>
    <tiny-select v-model="value2" ref="customFilterRef" filterable :filter-method="customFilterMethod" clearable>
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value1 = ref('')
const value2 = ref('')
const selectRef = ref()
const customFilterRef = ref()

const customFilterMethod = (searchValue) => {
  if (searchValue) {
    customFilterRef.value?.state.cachedOptions.forEach((item) => {
      item.state.visible = item.label.includes(searchValue)
    })
  } else {
    customFilterRef.value?.state.cachedOptions.forEach((item) => {
      item.state.visible = true
    })
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
