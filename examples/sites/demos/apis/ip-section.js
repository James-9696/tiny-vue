export default {
  mode: ['pc'],
  apis: [
    {
      name: 'ip-section',
      type: 'component',
      props: [
        {
          name: 'configs',
          type: 'Array<NetworkSegmentsConfig>',
          defaultValue: '',
          desc: {
            'zh-CN': 'IP各网段数据集',
            'en-US': 'IP network segment dataset'
          },
          mode: ['pc'],
          pcDemo: 'configure-network-segments'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置文本的禁用属性',
            'en-US': 'Set the disabled attribute of the text'
          },
          mode: ['pc'],
          pcDemo: 'segments-disabled'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '(value: string, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框失去焦点时触发事件',
            'en-US': 'The event is triggered when the text box loses the focus'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'focus',
          type: '(value: string, index: number) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框获取焦点时触发事件',
            'en-US': 'This event is triggered when a text box obtains the focus'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'change',
          type: '(value: string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '文本框内容改变后事件',
            'en-US': 'Event after changing the content of the text box'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽，自定义 ip 段之间的分隔符',
            'en-US': 'Separator between IP address segments'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ]
    }
  ]
}
