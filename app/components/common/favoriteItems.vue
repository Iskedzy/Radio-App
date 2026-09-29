<script setup lang="ts">
interface favorite {
  id: number
  waktu: string
  judul: string
  genre: string
  view: string
  img: string
}

const favorites = ref<favorite[]>([
  {
    id: 1,
    waktu: '87.6 FM • Kemarin, 21:30',
    judul: 'Hard Rock FM',
    genre: 'Classic Rock, Lifestyle, Talk',
    view: '18.4k',
    img: 'RockFM',
  },
  {
    id: 2,
    waktu: '100.0 FM • Kemarin, 17:15',
    judul: 'Suara Surabaya',
    genre: 'Informasi Kota & Dinamika Warga',
    view: '12.2k',
    img: 'SuaraSurabaya',
  },
  {
    id: 3,
    waktu: '103.8 FM • 2 Hari Lalu',
    judul: 'Brava Radio',
    genre: 'Smooth Jazz & Relaksasi Harian',
    view: '17.3k',
    img: 'Brava',
  },
])
</script>

<template>
  <div class="flex w-screen flex-row items-center gap-5 overflow-x-auto px-5 hide-scrollbar">
    <div
      v-for="favorit in favorites"
      :key="favorit.id"
      class="flex justify-start items-start flex-col p-3 w-[12rem] h-[17rem] bg-[#F5F3F3] rounded-3xl gap-3"
    >
      <BaseImages type="4x3" size="md" :src="favorit.img" />
      <div class="flex flex-col">
        <BaseText type="p" size="xs" color="lightGrey" track="wide">
          {{ favorit.waktu }}
        </BaseText>
        <BaseText type="h3" size="lg" color="darkGrey">
          {{ favorit.judul }}
        </BaseText>
        <BaseText type="p" size="xs" color="lightGrey" track="wide">
          {{ favorit.genre }}
        </BaseText>
      </div>

      <div class="flex justify-between w-full">
        <div class="flex items-center gap-1 mt-3">
          <BaseIcon name="headphone" size="xs" />
          <BaseText type="h2" size="xs" color="darkGrey" track="wide">
            {{ favorit.view }}
          </BaseText>
        </div>

        <BaseButton
          variant="contained"
          shape="circle"
          color="white"
          size="sm"
          class="flex justify-center items-center w-[2.5rem] h-[2.5rem] shrink-0"
        >
          <BaseIcon name="play-red" size="sm" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.element::-webkit-scrollbar {
  display: none;
}
</style>
