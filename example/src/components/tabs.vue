<template>
  <div style="placement: absolute; width: 800px; height: 400px; top: 300px; left: 200px;">
    <ChTabs placement="left">
      <ChTabPane name="tab 1" icon-left="airplane-engines-fill">
        <div>
          This is tab 1111.
          <BeakerIcon style="width: 1rem; height: 1rem" />
        </div>
      </ChTabPane>
      <ChTabPane name="tab 2" disabled>
        <ChTabs placement="top">
          <ChTabPane name="tab 2-1">
            This is tab 2-1.
          </ChTabPane>
          <ChTabPane name="tab 2-2">
            This is tab 2-2.
          </ChTabPane>
        </ChTabs>
      </ChTabPane>
      <ChTabPane name="tab 3" style="background: green">
        This is tab 3-default.
      </ChTabPane>
      <ChTabPane v-for="item in panes" :key="item.name" :name="item.name">
        {{ item.content }}
      </ChTabPane>
    </ChTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const panes = ref([
  {
    name: 'tab 4',
    content: '312321312312',
  },
])
</script>





