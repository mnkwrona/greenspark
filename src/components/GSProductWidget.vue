<script setup lang="ts">
import type Widget from '@/types/Widget'
import type Color from '@/types/Color'

import GSCheckbox from './GSCheckbox.vue'
import GSToggle from './GSToggle.vue'
import GSColorSelect from './GSColorSelect.vue'

defineProps<{
  widget: Widget
}>()

const colors: Color[] = ['blue', 'green', 'beige', 'white', 'black']
</script>

<template>
  <div class="gs-product-widget">
    <!-- <GSToggle /> -->
    <!-- <GSCheckbox /> -->
    <GSColorSelect :options="colors" selected="beige" />
  </div>
</template>
