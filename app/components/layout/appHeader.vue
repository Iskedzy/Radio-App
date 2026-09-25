<script setup lang="ts">
import Profile from '../common/Profile.vue';
import RadioHeader from '../common/RadioHeader.vue';
import SearchBar from '../common/SearchBar.vue';

</script>

<template>
    <div class="flex justify-between items-center px-5 py-4 bg-white shadow sticky top-0">
        <RadioHeader />

        <div class="flex gap-5">
            <div class="hidden lg:block lg:w-[20rem]">
                <SearchBar />
            </div>

            <Profile />
        </div>
    </div>

</template>