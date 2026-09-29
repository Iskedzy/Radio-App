import { ref } from 'vue'

const volume = ref(50)

export const useVolume = () => {
    const setVolume = (value: number) => {
        volume.value = Math.min(100, Math.max(0, value))
    }

    return {
        volume,
        setVolume,
    }
}

