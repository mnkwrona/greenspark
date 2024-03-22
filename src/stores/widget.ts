import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/services/useMockApi'

import type Widget from '@/types/Widget'

export const useWidgetStore = defineStore('widget', () => {
  const widgets = ref<Widget[] | null>([])
  const loading = ref<boolean>()

  const fetchWidgets = () => {
    const { fetchProductWidgets } = useApi()

    loading.value = true

    fetchProductWidgets
      .then((response) => {
        widgets.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return { fetchWidgets, widgets }
})
