<template>
  <div ref="tableEl" class="ch-table" :class="{ 'ch-table--border': !border }">
    <div
      class="ch-table-header"
      :class="{ 'ch-table-header--fixed': fixedHeader }"
    >
      <HeaderCell v-for="(cell, index) in header" :key="index" :data="cell" />
    </div>
    <div class="ch-table-body">
      <Row :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCell from './header-cell.vue'
import Row from './row.vue'
import type { TableProps } from '.'
import { genTableConfig } from '.'

const props = defineProps<TableProps>()

defineOptions({ name: 'Tables' })

const tableEl = ref<HTMLElement>()

genTableConfig(props, tableEl)
</script>
