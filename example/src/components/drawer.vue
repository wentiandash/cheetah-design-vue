<template>
  <ChDrawer ref="drawer" :shake-off="[]">
    This is drawer default.
    <!-- <template #headless>
      <div style="width: 100%; height: 100vh; background: red;">
        This is drawer headless.
      </div>
    </template> -->
  </ChDrawer>
  <ChButton style="margin-left: 500px; margin-top: 500px;" @click="handleClick">
    open drawer
  </ChButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()

const handleClick = () => {
  drawer.value?.open()
}
</script>
