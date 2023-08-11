<template>
  <ChPopover
    ref="popover"
    trigger="click"
    title="Popover Title"
    content="This is popover content!"
    style="position: absolute; top: 50%; left: 50%;"
  >
    <template #reference>
      <ChButton>
        popover
      </ChButton>
    </template>
    <!-- <template #default>
      This is popover!
    </template> -->
  </ChPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const popover = ref()
</script>
