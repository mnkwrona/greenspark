<script setup lang="ts">
import type Widget from '@/types/Widget'

import GSToggle from './GSToggle.vue'

defineProps<{
  widget: Widget
}>()
</script>

<template>
  <div class="gs-product-widget">
    <GSToggle />
  </div>
</template>
