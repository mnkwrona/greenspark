<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
import { useWidgetStore } from '@/stores/widget'
import { storeToRefs } from 'pinia'
import GSProductWidget from './GSProductWidget.vue'

const widgetStore = useWidgetStore()
const { widgets } = storeToRefs(widgetStore)
</script>

<template>
  <div class="gs-product-widgets-manager flex flex-col sm:flex-row">
    <GSProductWidget v-for="(widget, index) in widgets" :key="index" :widget="widget" />
  </div>
</template>
