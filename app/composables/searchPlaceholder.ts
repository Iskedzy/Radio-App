import { ref, onMounted } from 'vue'

const placeholders = ['Cari Stasiun atau genre...', 'Cari stasiun, kota, atau mood...']

export const usePlaceholder = () => {
  const placeholder = ref(placeholders[0])

  onMounted(() => {
    const index = Math.floor(Math.random() * placeholders.length)

    placeholder.value = placeholders[index]
  })
  return {
    placeholder,
  }
}
