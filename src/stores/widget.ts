import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', () => {
  // @TODO check for other selectedColors: white and beige
  const widgets = ref([
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
