<script setup lang="ts">
import type Widget from '@/types/Widget'

import GSCheckbox from './GSCheckbox.vue'
import GSToggle from './GSToggle.vue'

defineProps<{
  widget: Widget
}>()
</script>

<template>
  <div class="gs-product-widget">
    <!-- <GSToggle /> -->
    <GSCheckbox />
  </div>
</template>
