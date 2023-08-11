<template>
  <div style="width: 400px;">
    <ChSelect
      ref="select"
      v-model="value"
      :options="options"
      info-tip="哈喽！"
      clearable
      multiple
      placeholder="this is select"
      :pattern="/^\d+$/"
      error-tip="错了"
      success-tip="对了"
    >
      <!-- <template #prepend>
        231
      </template>
      <template #append>
        231
      </template> -->
    </ChSelect>
  </div>
  <!-- <ChDropdown trigger="click" :data="[{ name: 1 }]">
    <template #reference>
      <ChButton>131</ChButton>
    </template>
  </ChDropdown> -->
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import 'cheetah-design-vue/src/components/input/src/index.less'
import 'cheetah-design-vue/src/components/tag/src/index.less'
import 'cheetah-design-vue/src/components/dropdown/src/index.less'
import 'cheetah-design-vue/src/components/scrollbar/src/index.less'

const select = ref()
const value = ref([])

watchEffect(() => {
  console.log(value.value.length)
})

const options = ref<any[]>([])
for (let i = 0; i < 6; i++)
  options.value.push({ name: `option-${i}` })
</script>
