<script setup lang="ts">
import AppHeader from './components/layout/appHeader.vue'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
    <main class="w-full min-h-screen overflow-x-hidden">
        <div class="sticky top-0 z-50">
            <AppHeader />
        </div>

        <NuxtPage
            :transition="{
                name: 'page',
                mode: 'out-in'
            }"
        />

        <div class="sticky bottom-0 z-50 lg:hidden">
            <Navbar type="Mobile" />
        </div>
    </main>
</template>