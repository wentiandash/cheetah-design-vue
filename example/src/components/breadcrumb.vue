<template>
  <div style="height: 500px; padding: 30px;">
    <ChBreadcrumb ref="breadcrumb" v-model="steps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const breadcrumb = ref()

const steps = ref([
  {
    name: 'page1',
    icon: 'basket2',
  },
  {
    name: 'page2',
    icon: 'bandaid',
  },
  {
    name: 'page3',
  },
])
</script>
