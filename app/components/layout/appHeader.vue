<script setup lang="ts">
import Profile from "../common/Profile.vue";
import RadioHeader from "../common/RadioHeader.vue";
import SearchBar from "../common/SearchBar.vue";
import Navigation from "../common/Navigation.vue";
</script>

<template>
    <div class="flex justify-between items-center px-5 md:px-10 lg:px-24 py-4 bg-white shadow sticky top-0">
        <div class="flex gap-5 items-center">
            <RadioHeader />
            <div class="hidden lg:block lg:p-1 lg:bg-[#EFEDED] rounded-full">
                <Navigation type="Desktop" class="hidden xl:block" />
            </div>
        </div>

        <div class="flex gap-5 items-center">
            <div class="hidden lg:block lg:w-[20rem]">
                <SearchBar />
            </div>

            <Profile />
        </div>
    </div>
</template>
