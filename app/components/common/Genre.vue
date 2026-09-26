<script setup lang="ts">
interface Genre {
    id: number,
    name: string,
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

</script>

<template>
    <div class="flex w-full flex-row gap-1.5 overflow-x-auto py-1.5">
        <div
            v-for="genre in Genres"
            :key="genre.id"
            class="shrink-0"
        >
            <BaseButton
                variant="ghost"
                size="sm"
                color="snow"
                class="px-5 py-2"
            >
                {{ genre.name }}
            </BaseButton>
        </div>
    </div>
</template>