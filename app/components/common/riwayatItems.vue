<script setup lang="ts">
import Riwayat from "~/pages/riwayat.vue";

interface riwayat {
  id: number;
  judul: string;
  genre: string;
  img: string;
}

const riwayates = ref<riwayat[]>([
  {
    id: 1,
    judul: "Hard Rock FM • 87.6 FM",
    genre: "Classic Rock, Lifestyle, Talk • Kemarin, 21:30",
    img: "RockFM",
  },
  {
    id: 2,
    judul: "Suara Surabaya • 100.0 FM",
    genre: "Informasi Kota & Dinamika Warga • Kemarin, 17:15",
    img: "SuaraSurabaya",
  },
  {
    id: 3,
    judul: "Brava Radio • 103.8 FM",
    genre: "Smooth Jazz & Relaksasi Harian 2 • Hari Lalu",
    img: "Brava",
  },
]);
</script>

<template>
  <div class="flex flex-col items-center p-1 gap-2 w-full mt-3">
    <div
      v-for="riwayat in riwayates"
      :key="riwayat.id"
      class="flex flex-row justify-between items-center bg-[#F5F3F3] w-full p-3 rounded-full gap-5"
    >
      <div>
        <BaseImages type="rounded" size="xs" :src="riwayat.img"> </BaseImages>
      </div>
      <div class="flex flex-col items-start">
        <BaseText type="h3" size="md" color="darkGrey">
          {{ riwayat.judul }}
        </BaseText>
        <BaseText type="p" size="xs" color="lightGrey" track="wide">
          {{ riwayat.genre }}
        </BaseText>
      </div>

      <div>
        <BaseButton :rounded="true" color="white" size="sm" class="shadow">
          <BaseIcon name="Loop" size="sm" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
