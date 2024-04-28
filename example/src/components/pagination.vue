<template>
  <div style="height: 500px; padding: 30px;">
    <ChPagination ref="paginations" :count="count" mode="ghost" shape="circle" />

    <ChButton @click="handlePrevClick">
      prev
    </ChButton>
    <ChButton @click="handleNextClick">
      next
    </ChButton>
    <ChButton @click="handleToggleClick">
      toggle
    </ChButton>
    <ChButton @click="handleAddClick">
      add step
    </ChButton>
    <ChButton @click="handleSubClick">
      sub step
    </ChButton>
  </div>
</template>

<script setup lang="ts">
import { ChButton } from 'cheetah-design-vue';
import { ref } from 'vue'

const count = ref(10)
const paginations = ref()

const handlePrevClick = () => {
  paginations.value?.prev()
}

const handleNextClick = () => {
  paginations.value?.next()
}

const handleToggleClick = () => {
  paginations.value?.toggle(2)
}
const handleAddClick = () => {
  count.value++
}
const handleSubClick = () => {
  count.value--
}
</script>
