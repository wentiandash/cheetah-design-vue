<template>
  <div style="height: 500px; padding: 30px;">
    <ChSteps ref="stepsEl" v-model="steps" />
    <!-- <ChSteps ref="stepsEl" v-model="steps" vertical /> -->
    <br>
    <br>
    <button @click="handleToggleClick">
      toggle
    </button>
    <br>
    <br>
  </div>
</template>

<script setup lang="ts">
import type { StepsInstance, StepsItem } from 'cheetah-design-vue'
import { ref } from 'vue'

const stepsEl = ref<StepsInstance>()

const handleToggleClick = () => {
  stepsEl.value?.toggle(1, {
    state: 'done',
    result: 'success',
  })
}

const steps = ref<StepsItem[]>([
  {
    name: 'Step 1',
    description: 'This is Step 1, This is Step 1',
    icon: 'activity',
    state: 'processing',
  },
  {
    name: 'Step 2',
    description: 'This is Step 2',
    icon: '',
  },
  {
    name: 'Step 3',
    description: 'This is Step 3',
    icon: '',
  },
])
</script>
