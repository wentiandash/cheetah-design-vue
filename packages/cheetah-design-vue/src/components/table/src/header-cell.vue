<template>
  <div class="ch-table-header-cell" :style="columnWidth">
    <div class="ch-table-cell">
      {{ data.name }}
    </div>
    <div v-if="data.children" class="ch-table-header-cell-children">
      <HeaderCell
        v-for="childCell in data.children"
        :key="childCell.name"
        :data="childCell"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HeaderCell from './header-cell.vue'
import type { TableHeaderCellProps } from '.'

const props = defineProps<TableHeaderCellProps>()

defineOptions({ name: 'HeaderCell' })

const columnWidth = computed(() => {
  if (!props.data.children)
    return `width: var(--ch-table-column-${props.data.index}-width);`

  return ''
})
</script>
