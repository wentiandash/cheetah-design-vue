<template>
  <button
    ref="buttonEl"
    :type="type"
    class="ch-button"
    :class="[
      `ch-button--${parent?.mode || mode}`,
      `ch-button--${parent?.state || state}`,
      `ch-button--${parent?.shape || shape}`,
      `ch-button--${parent?.size || size}`,
      (parent?.disabled || disabled) && 'is-disabled',
    ]"
    @click="$emit('click', $event)"
  >
    <Icon v-if="iconLeft" :class="{ 'icon-left': $slots.default }" :name="iconLeft" />
    <slot />
    <Icon v-if="iconRight" :class="{ 'icon-right': $slots.default }" :name="iconRight" />
  </button>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import Icon from '../../icon/src/index.vue'
import { GROUP_BUTTON_KEY } from '../../button-group'
import { buttonProps } from '.'

defineProps(buttonProps)

defineEmits(['click'])

defineOptions({ name: 'Button' })

const buttonEl = ref<HTMLButtonElement>()

const parent = inject(GROUP_BUTTON_KEY, null)
</script>
