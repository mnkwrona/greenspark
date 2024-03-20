<script setup lang="ts">
import type Widget from '@/types/Widget'

defineProps<{
  widget: Widget
}>()
</script>

<template>
  <div class="gs-product-widget">{{ widget }}</div>
</template>
