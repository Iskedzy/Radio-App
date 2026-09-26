<script setup lang="ts">
import Profile from './components/common/Profile.vue'
import SearchBar from './components/common/SearchBar.vue'
import VolumeSlider from './components/common/VolumeSlider.vue'
import AppHeader from './components/layout/appHeader.vue'
</script>

<template>
  <main class="w-full min-h-screen overflow-x-hidden">
    <AppHeader />
    <PagePlayer/>



  </main>
</template>