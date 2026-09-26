<script setup lang="ts">
import AppHeader from './components/layout/appHeader.vue'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <main class="w-full min-h-screen overflow-x-hidden">
    <AppHeader />

    <NuxtPage 
    :transition="{
      name:'page',
      mode:'out-in'
    }"
    />

    <div class="lg:hidden sticky bottom-0">
      <Navbar type="Mobile" />
    </div>
  </main>
</template>