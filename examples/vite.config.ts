import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { CheetahResolver } from 'cheetah-design-vue/dist/lib/resolver'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [
        presetUno({
          attributifyPseudo: true,
        }),
        presetAttributify(),
      ],
    }),
    Components({
      resolvers: [
        CheetahResolver({
          importStyle: 'less',
          from: 'cheetah-design-vue/components',
        }),
      ],
    }),
  ],
})
