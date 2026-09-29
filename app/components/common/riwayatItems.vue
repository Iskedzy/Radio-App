<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface Riwayat {
  id: number
  judul: string
  genre: string
  img: string
}

interface MarqueeItem {
  container: HTMLElement | null
  content: HTMLElement | null
  containerWidth: number
  contentWidth: number
  duration: number
  shouldScroll: boolean
}

const riwayates = ref<Riwayat[]>([
  {
    id: 1,
    judul: 'Hard Rock FM • 87.6 FM',
    genre: 'Classic Rock, Lifestyle, Talk • Kemarin, 21:30',
    img: 'RockFM',
  },
  {
    id: 2,
    judul: 'Suara Surabaya • 100.0 FM',
    genre: 'Informasi Kota & Dinamika Warga • Kemarin, 17:15',
    img: 'SuaraSurabaya',
  },
  {
    id: 3,
    judul: 'Brava Radio • 103.8 FM',
    genre: 'Smooth Jazz & Relaksasi Harian 2 • Hari Lalu',
    img: 'Brava',
  },
])

const marqueeItems = ref<Record<number, MarqueeItem>>({})

const observers = new Map<number, ResizeObserver>()

const checkOverflow = async (id: number) => {
  await nextTick()

  const item = marqueeItems.value[id]

  if (!item?.container || !item?.content) return

  item.containerWidth = item.container.clientWidth
  item.contentWidth = item.content.scrollWidth

  if (item.contentWidth > item.containerWidth) {
    item.shouldScroll = true

    const distance = item.contentWidth - item.containerWidth

    item.duration = Math.max(3, distance / 40)
  } else {
    item.shouldScroll = false
    item.duration = 0
  }
}

const setContainer = (id: number, element: HTMLElement | null) => {
  if (!marqueeItems.value[id]) {
    marqueeItems.value[id] = {
      container: null,
      content: null,
      containerWidth: 0,
      contentWidth: 0,
      duration: 0,
      shouldScroll: false,
    }
  }

  marqueeItems.value[id].container = element
}

const setContent = (id: number, element: HTMLElement | null) => {
  if (!marqueeItems.value[id]) {
    marqueeItems.value[id] = {
      container: null,
      content: null,
      containerWidth: 0,
      contentWidth: 0,
      duration: 0,
      shouldScroll: false,
    }
  }

  marqueeItems.value[id].content = element
}

onMounted(async () => {
  await nextTick()

  for (const riwayat of riwayates.value) {
    await checkOverflow(riwayat.id)

    const item = marqueeItems.value[riwayat.id]

    if (!item?.container) continue

    const observer = new ResizeObserver(() => {
      checkOverflow(riwayat.id)
    })

    observer.observe(item.container)

    observers.set(riwayat.id, observer)
  }
})

onUnmounted(() => {
  observers.forEach((observer) => {
    observer.disconnect()
  })

  observers.clear()
})
</script>

<template>
  <div class="flex flex-col items-center p-1 gap-2 w-full mt-3">
    <div
      v-for="riwayat in riwayates"
      :key="riwayat.id"
      class="flex flex-row justify-between items-center bg-[#F5F3F3] w-full p-3 rounded-full gap-5"
    >
      <div class="flex items-center justify-center gap-5 min-w-0">
        <div class="shrink-0">
          <BaseImages type="rounded" size="xs" :src="riwayat.img" />
        </div>

        <div
          :ref="(el) => setContainer(riwayat.id, el as HTMLElement | null)"
          class="flex flex-col items-start justify-start overflow-hidden w-[13rem] min-w-0"
        >
          <BaseText type="h3" size="md" color="darkGrey">
            {{ riwayat.judul }}
          </BaseText>
          <div
            :ref="(el) => setContent(riwayat.id, el as HTMLElement | null)"
            class="w-max whitespace-nowrap"
            :class="{
              'animate-marquee': marqueeItems[riwayat.id]?.shouldScroll,
            }"
            :style="{
              '--marquee-distance': `-${Math.max(
                0,
                (marqueeItems[riwayat.id]?.contentWidth ?? 0) -
                  (marqueeItems[riwayat.id]?.containerWidth ?? 0),
              )}px`,
              '--marquee-duration': `${marqueeItems[riwayat.id]?.duration ?? 0}s`,
            }"
          >
            <BaseText type="p" size="xs" color="lightGrey" track="wide">
              {{ riwayat.genre }}
            </BaseText>
          </div>
        </div>
      </div>

      <div class="shrink-0">
        <BaseButton variant="contained" shape="circle" color="white" size="sm" class="shadow">
          <BaseIcon name="Loop" size="sm" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--marquee-duration) ease-in-out infinite alternate;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(var(--marquee-distance));
  }
}
</style>
