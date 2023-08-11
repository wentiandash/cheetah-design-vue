<template>
  <div class="ch-badge-container">
    <slot />
    <div
      class="ch-badge"
      :class="[
        {
          'is-position': $slots.default,
          'is-dot': !value || dot,
          'is-hidden': hidden,
        },
        `ch-badge--${state}`,
      ]"
    >
      {{ dot ? '' : bagdeValue }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { badgeProps } from '../src'

const props = defineProps(badgeProps)

defineOptions({ name: 'Badge' })

const bagdeValue = computed(() => {
  if (Number(props.value) >= props.max)
    return `${props.max}+`

  return props.value
})
</script>
.