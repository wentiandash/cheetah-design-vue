<template>
  <template v-for="row in data" :key="row[key]">
    <div
      class="ch-table-row"
      :class="{ 'ch-table-row--striped': config.striped }"
    >
      <Cell
        v-for="(col, colIndex) in config.columns"
        :key="colIndex"
        :data="row[col.key!]"
        :style="`width: var(--ch-table-column-${colIndex}-width);`"
        @contextmenu="handelCopy(row, col.key!, row[col.key!])"
      />
    </div>
    <template v-if="row.children">
      <Row :data="row.children" />
    </template>
  </template>
</template>

<script setup lang="ts">
import { handelCopy } from './copy'
import Cell from './cell.vue'
import Row from './row.vue'
import type { TableRowProps } from '.'
import { config } from '.'

defineProps<TableRowProps>()

defineOptions({ name: 'Row' })
</script>
