<template>
  <div class="demo-select">
    <p>场景1：嵌套表格（单选）</p>
    <tiny-select
      v-model="value1"
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
    <p>场景2：嵌套表格（多选）</p>
    <tiny-select
      v-model="value2"
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
    <p>场景3：嵌套表格 + 可搜索 + 可清除</p>
    <tiny-select
      ref="select"
      v-model="value3"
      filterable
      :filter-method="filter"
      clearable
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOpRadio"
    ></tiny-select>
  </div>
</template>

<script>
import { Select } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select
  },
  methods: {
    filter(value) {
      if (!value) {
        return this.gridOpRadio.data
      }

      return this.gridOpRadio.data.filter((item) => {
        return item.city.includes(value)
      })
    }
  },
  data() {
    return {
      value1: '',
      value2: [],
      value3: '',
      gridOpRadio: {
        data: [
          { id: '001', area: '华南区', province: '广东省', city: '深圳1' },
          { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
          { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
          { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
          { id: '005', area: '华南区', province: '广东省', city: '中山市' }
        ],
        columns: [
          { type: 'radio', title: '' },
          { field: 'area', title: '区域', width: 90 },
          { field: 'province', title: '省份', width: 60 },
          { field: 'city', title: '城市', width: 60 }
        ]
      }
    }
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
