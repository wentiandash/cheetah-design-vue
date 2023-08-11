<template>
  <div
    class="ch-tag"
    :class="[`ch-tag--${mode}`, `ch-tag--${shape}`, `ch-tag--${state}`]"
  >
    <i v-if="indicator" class="is-indicator" />
    <slot />
    <Icon
      v-if="closable"
      class="is-closable"
      name="x-lg"
      @click="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import Icon from '../../icon'
import type { TagProps } from '.'

withDefaults(defineProps<TagProps>(), {
  mode: 'solid',
  state: 'primary',
  shape: 'rounded',
})

const emits = defineEmits(['close'])

defineOptions({ name: 'Tag' })

const handleClose = (evt: MouseEvent) => {
  emits('close', evt)
}
</script>
