import { ref } from 'vue'
import { defineStore } from 'pinia'

import type Widget from '@/types/Widget'

export const useWidgetStore = defineStore('widget', () => {
  const widgets = ref<Widget[]>([
    {
      id: 1,
      type: 'plastic bottles',
      amount: 100,
      action: 'collects',
      active: true,
      linked: true,
      selectedColor: 'green'
    },
    {
      id: 2,
      type: 'trees',
      amount: 10,
      action: 'plants',
      active: false,
      linked: false,
      selectedColor: 'black'
    },
    {
      id: 3,
      type: 'carbon',
      amount: 20,
      action: 'offsets',
      active: false,
      linked: false,
      selectedColor: 'blue'
    }
  ])

  return { widgets }
})
