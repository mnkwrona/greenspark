import axios from 'axios'

export function useApi() {
  const fetchProductWidgets = axios.get(import.meta.env.VITE_API_URL)

  return {
    fetchProductWidgets
  }
}
