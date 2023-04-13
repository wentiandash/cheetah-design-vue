import { version } from '../../../packages/cheetah-design-vue/package.json'
import { enComponents, zhComponents } from './components'
import { enGuides, zhGuides } from './guides'

export const nav = {
  en: [
    { text: 'Guide', items: enGuides },
    { text: 'Components', items: enComponents },
    {
      text: `v${version}`,
      items: [
        {
          text: 'Release Notes',
          link: 'https://github.com/jwhupup/cheetah-design-vue/releases',
        },
      ],
    },
  ],
  zh: [
    { text: '指南', items: zhGuides },
    { text: '组件', items: zhComponents },
    {
      text: `v${version}`,
      items: [
        {
          text: '发布说明',
          link: 'https://github.com/jwhupup/cheetah-design-vue/releases',
        },
      ],
    },
  ],
}
