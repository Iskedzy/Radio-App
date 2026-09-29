<script setup lang="ts">
interface Genre {
  id: number
  name: string
}

const Genres = ref<Genre[]>([
  {
    id: 1,
    name: 'Semua',
  },
  {
    id: 2,
    name: 'Jazz & Blues',
  },
  {
    id: 3,
    name: 'Chillout Malam',
  },
  {
    id: 4,
    name: 'Berita & Podcast',
  },
])

const activeGenre = ref(1)

const selectGenre = (id: number) => {
  activeGenre.value = id
}
</script>

<template>
  <div class="flex w-screen px-5 flex-row gap-1.5 overflow-x-auto py-1.5 hide-scrollbar">
    <div v-for="genre in Genres" :key="genre.id" class="shrink-0">
      <BaseButton
        variant="outlined"
        shape="pill"
        color="snow"
        size="sm"
        :active="activeGenre === genre.id"
        class="px-5 py-2"
        @click="selectGenre(genre.id)"
      >
        {{ genre.name }}
      </BaseButton>
    </div>
  </div>
</template>

<style>
.hide-scrollbar {
  scrollbar-width: none;

  /* Hides scrollbar for Internet Explorer and Edge Legacy */
  -ms-overflow-style: none;
}

/* Hides scrollbar for Chrome, Safari, and Opera */
.element::-webkit-scrollbar {
  display: none;
}
</style>
