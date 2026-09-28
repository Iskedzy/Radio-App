<script setup lang="ts">
import SearchBar from '~/components/common/SearchBar.vue';
import Genre from '~/components/common/Genre.vue';
import PlayerCard from '~/components/layout/playerCard.vue';
import FavoritCard from '~/components/layout/favoritCard.vue';
import RiwayatCard from '~/components/layout/riwayatCard.vue';


</script>

<template>
    <div class="flex flex-col justify-center items-center px-5 gap-5 mt-5 w-screen">
        <div class="flex flex-col md:hidden">
            <SearchBar type="Mobile" />
        </div>

        <div class="flex flex-col md:hidden">
            <Genre />
        </div>

        <PlayerCard />
        <FavoritCard />
        <RiwayatCard />

    </div>
</template>
