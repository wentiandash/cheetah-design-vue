<template>
  <div
    ref="tagEl"
    class="pl-tag"
    :class="[`pl-tag--${type}`, `pl-tag--${shape}`, `pl-tag--${state}`]"
  >
    <i v-if="indicator" class="is-indicator" />
    <slot />
    <Icon
      v-if="closable"
      class="is-closable"
      name="bi-x-lg"
      @click="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../../icon'
import { tagProps } from './tag'

defineProps(tagProps)

const emits = defineEmits(['close'])

const tagEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  tagEl.value?.parentNode?.removeChild(tagEl.value)
  emits('close', evt)
}
</script>
