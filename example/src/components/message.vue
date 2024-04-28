<template>
  <ChButton style="position: absolute; left: 50%; top: 50%;" @click="handleClick">
    message
  </ChButton>
</template>

<script setup lang="ts">
import 'cheetah-design-vue/src/styles/base.less'
import 'cheetah-design-vue/src/components/alert/src/index.less'
import 'cheetah-design-vue/src/components/message/src/index.less'

const handleClick = () => {
  ['info', 'success', 'warning', 'danger'].forEach((item) => {
    ChMessage({
      state: item as 'info' | 'success' | 'warning' | 'danger',
      content: 'Notifications may include alerts, sounds and icon badges, sounds and icon badges',
    })
  })
}
</script>
