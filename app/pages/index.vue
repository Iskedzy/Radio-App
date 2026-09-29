<script setup lang="ts">
import SearchBar from '~/components/common/SearchBar.vue';
import Genre from '~/components/common/Genre.vue';
import PlayerCard from '~/components/layout/playerCard.vue';
import FavoritCard from '~/components/layout/favoritCard.vue';
import RiwayatCard from '~/components/layout/riwayatCard.vue';
import GoogleAccount from '~/components/common/googleAccount.vue';


</script>

<template>
    <div class="flex flex-col justify-center items-center gap-5 mt-5 w-screen box-border px-5 mb-[10rem]">
        <div class="flex flex-col md:hidden">
            <SearchBar type="Mobile" />
        </div>

        <div class="flex flex-col md:hidden">
            <Genre />
        </div>

        <PlayerCard />
        <FavoritCard />
        <RiwayatCard />
        <GoogleAccount/>

    </div>
</template>
