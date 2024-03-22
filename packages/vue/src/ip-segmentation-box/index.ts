/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import IpSegmentationBox from './src/index'
import '@opentiny/vue-theme/ip-segmentation-box/index.less'
import { version } from './package.json'

IpSegmentationBox.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
IpSegmentationBox.install = function (Vue) {
  Vue.component(IpSegmentationBox.name, IpSegmentationBox)
}

IpSegmentationBox.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    IpSegmentationBox.install(window.Vue)
  }
}

export default IpSegmentationBox
