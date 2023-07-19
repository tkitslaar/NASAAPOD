import { ref, onMounted } from 'vue'

export default {
  name: 'apicall',
  setup() {
    const items = ref({})
    const loading = ref(true)
    const loaded = ref(true)

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=5GDTunaOQmuTSPg0nhY9lrgKfvhbsG3Ztaw1ZTJT')
        const data = await response.json()
        items.value = data
        loading.value = false
      } catch (error) {
        console.error(error)
      }
    }
    // response.status, throw etc here
    onMounted(() => {
      fetchData()
    })

    return {
      items,
      loading,
      loaded
    }
  }
}