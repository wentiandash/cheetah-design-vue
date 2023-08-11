import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'

export interface PlayResolverOptions {
  importStyle?: boolean | 'less'
  from?: string
}

export const isSSR = Boolean(
  process.env.SSR
    || process.env.SSG
    || process.env.VITE_SSR
    || process.env.VITE_SSG,
)

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function getSideEffects(
  dirName: string,
  options: PlayResolverOptions,
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR)
    return

  const noStyleComps: string[] = [
    'select',
    'tab-pane',
    'pagination',
    'breadcrumb',
    'virtual-list',
    'virtual-list-item',
  ]

  if (noStyleComps.includes(dirName))
    return

  if (importStyle === 'less') {
    return [
      'cheetah-design-vue/src/styles/base.less',
      `cheetah-design-vue/src/components/${dirName}/src/index.less`,
    ]
  }

  return [`cheetah-design-vue/dist/styles/${dirName}/src/index.js`]
}

export function PlayResolver(
  options: PlayResolverOptions = {},
): ComponentResolver {
  const { from = 'cheetah-design-vue' } = options
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Ch')) {
        const partialName = name.slice(2)
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
