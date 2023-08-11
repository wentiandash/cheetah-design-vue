<template>
  <div class="ch-table-cell">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import type { TableCellProps } from '.'

defineProps<TableCellProps>()
</script>
