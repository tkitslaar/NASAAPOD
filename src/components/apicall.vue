<template>
  <div>
    <p>NASA Astronomy Picture of the Day</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  name: 'apicall',
  setup() {
    const items = ref([])
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=5GDTunaOQmuTSPg0nhY9lrgKfvhbsG3Ztaw1ZTJT')
        const data = await response.json()
        items.value = data
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      items
    }
  }
}
</script>
