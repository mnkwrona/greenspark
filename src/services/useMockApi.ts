import axios from 'axios'

export function useApi() {
  const url = import.meta.env.VITE_API_URL
  const fetchProductWidgets = axios.get(url)

  return {
    fetchProductWidgets
  }
}
