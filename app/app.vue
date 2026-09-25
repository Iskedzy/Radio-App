<script setup lang="ts">
import Profile from './components/common/Profile.vue'
import SearchBar from './components/common/SearchBar.vue'
import VolumeSlider from './components/common/VolumeSlider.vue'
import AppHeader from './components/layout/appHeader.vue'
</script>

<template>
  <main class="w-full min-h-screen overflow-x-hidden">
    <AppHeader />

    <section class="w-full px-4">
      <BaseButton :rounded="true" color="red" size="sm" />

      <BaseIcon name="google" size="lg" />

      <Profile />

      <div class="w-full flex justify-center py-1 bg-[#EFEDED] rounded-full">
        <BaseNavigation />
      </div>

      <VolumeSlider />

      <SearchBar />
    </section>
  </main>
</template>