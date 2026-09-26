<script setup lang="ts">
import SearchBar from '~/components/common/SearchBar.vue';
import Genre from '~/components/common/Genre.vue';
import PlayerCard from '~/components/common/playerCard.vue';


</script>

<template>
    <div class="flex flex-col items-center px-5 gap-5 mt-5">
        <div class="flex flex-col md:hidden">
            <SearchBar type="Mobile" />
        </div>

        <Genre />
        <PlayerCard/>

    </div>
</template>
