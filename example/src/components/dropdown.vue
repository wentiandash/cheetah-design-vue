<template>
  <ChDropdown
    ref="dropdown"
    trigger="click"
    :data="list"
    style="position: absolute; top: 50%; left: 50%;"
  >
    <template #reference>
      <ChButton>
        dropdown
      </ChButton>
    </template>
  </ChDropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'cheetah-design-vue/src/components/badge/src/index.less'
import 'cheetah-design-vue/src/components/Popover/src/index.less'
import type { DropdownData } from 'cheetah-design-vue'

const dropdown = ref()

const list = ref<DropdownData[]>([
  {
    name: 'btn 1',
    divider: true,
    children: [
      { name: 'btn 1 1' },
      {
        name: 'btn 1 2',
        children: [
          { name: 'btn 1 1 1' },
          { name: 'btn 1 1 2' },
          { name: 'btn 1 1 3' },
        ],
      },
    ],
  },
  {
    name: 'btn 2',
    divider: true,
    title: 'Title',
    button: {
      iconLeft: 'airplane',
      badge: {
        state: 'success',
      },
    },
    callback() {
      alert('invoke callback!')
    },
  },
])
</script>
