<template>
  <div>
    <p>场景1：下拉表格远程搜索基础用法</p>
    <tiny-select
      ref="select1"
      v-model="radioValue1"
      placeholder="请输入关键词"
      clearable
      filterable
      remote
      :remote-method="remoteMethod"
      multiple
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
    <p>场景2：下拉表格远程搜索 + 自动搜索 + 显示按钮</p>
    <tiny-select
      ref="select2"
      v-model="radioValue2"
      multiple
      placeholder="请输入关键词"
      clearable
      filterable
      remote
      :remote-method="remoteMethod"
      :remote-config="{ autoSeach: true, clearData: true, showIcon: true }"
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const allData = ref([])
const radioValue1 = ref([])
const radioValue2 = ref([])
const gridOpRadio = ref({
  data: [],
  height: 300,
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: { gt: 20 },
    scrollY: { gt: 20 }
  },
  columns: [
    { type: 'selection', title: '' },
    { field: 'area', title: '区域' },
    { field: 'province', title: '省份' },
    { field: 'city', title: '城市' }
  ]
})

allData.value = Array.from({ length: 10000 }, (a, i) => {
  return {
    id: '00' + i,
    area: '华南区' + i,
    province: '广东省' + i,
    city: '广州市' + i
  }
})

const remoteMethod = (value) => {
  let allData = Array.from({ length: 1000 }, (a, i) => {
    return {
      id: '00' + i,
      area: '华南区' + i,
      province: '广东省' + i,
      city: '广州市' + i
    }
  })

  let filterData = allData.filter((item) => {
    return item.city.includes(value)
  })

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterData)
    }, 500)
  })
}

const filter = (value) => {
  return allData.value.filter((item) => {
    return !item.city.includes(value)
  })
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
