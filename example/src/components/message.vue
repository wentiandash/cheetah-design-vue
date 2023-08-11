<template>
  <ChButton style="position: absolute; left: 50%; top: 50%;" @click="handleClick">
    message
  </ChButton>
</template>

<script setup lang="ts">
import 'cheetah-design-vue/styles/base.less'
import 'cheetah-design-vue/components/alert/src/index.less'
import 'cheetah-design-vue/components/message/src/index.less'
import { PlMessage } from 'cheetah-design-vue'

const handleClick = () => {
  ['info', 'success', 'warning', 'danger'].forEach((item) => {
    PlMessage({
      state: item as 'info' | 'success' | 'warning' | 'danger',
      content: 'Notifications may include alerts, sounds and icon badges, sounds and icon badges',
    })
  })
}
</script>
