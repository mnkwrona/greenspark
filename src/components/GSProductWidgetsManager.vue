<script setup lang="ts">
/**
 * Product Widgets Manager component
 */
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, onBeforeMount } from 'vue'
import { useWidgetStore } from '../stores/widget'

import type Widget from '@/types/Widget'
import type UpdateEvent from '@/types/UpdateEvent'

const GSProductWidget = defineAsyncComponent(() => import('./GSProductWidget.vue'))
const GSSkeleton = defineAsyncComponent(() => import('./GSSkeleton.vue'))

const widgetStore = useWidgetStore()
const { fetchWidgets } = widgetStore
const { widgets } = storeToRefs(widgetStore)

/**
 * Handles widget parameter changes
 * and updates them in the store.
 * @param {Object} event Parameter key and new value
 * @param {object} widget Updated widget
 */
const handleUpdate = (event: UpdateEvent, widget: Widget): void => {
  const modifiedWidget: Widget | undefined = widgets?.value?.find((w) => {
    return JSON.stringify(w) === JSON.stringify(widget)
  })

  // disable other widgets
  if (event.property === 'active' && event.value) {
    widgets.value?.forEach((widget) => {
      if (JSON.stringify(modifiedWidget) !== JSON.stringify(widget)) {
        widget.active = false
      }
    })
  }

  if (modifiedWidget) {
    // @ts-expect-error
    modifiedWidget[event.property] = event.value
  }
}

onBeforeMount(() => {
  fetchWidgets()
})
</script>

<template>
  <div
    class="gs-product-widgets-manager bg-[--gs-c-gray-light] drop-shadow-xl mx-auto px-[12px] py-[24px] lg:p-[36px] rounded-[7px] sm:w-min-content lg:w-full"
  >
    <div
      v-if="widgets?.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-10 wrap items-center lg:justify-between"
    >
      <GSProductWidget
        v-for="(widget, index) in widgets"
        :key="index"
        :widget="widget"
        class="max-w-[220px] flex-1 w-full h-fit"
        @updated="handleUpdate($event, widget)"
      />
    </div>

    <GSSkeleton v-else class="min-h-[163px] w-full" />
  </div>
</template>
