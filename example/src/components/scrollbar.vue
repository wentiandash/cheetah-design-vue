<template>
  <div style="position: relative; width: 800px; height: 80%; border: 1px solid #4c4e50;">
    <ChScrollbar ref="scrollbar">
      <div v-for="(item, index) in list" :key="index">
        {{ `${index + 1}. ${item}` }}
      </div>
    </ChScrollbar>
  </div>
  <ChButton @click="handleScroll">
    回到顶部
  </ChButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import type { ScrollbarInstance } from 'cheetah-design-vue'

const scrollbar = ref<ScrollbarInstance>()
const list = ref(Array(100).fill(null).map(_ => faker.lorem.sentences()))

const handleScroll = () => {
  scrollbar.value?.scrollto({
    top: 1000,
    behavior: 'smooth',
  })
}
</script>
