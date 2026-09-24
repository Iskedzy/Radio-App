<script setup lang="ts">
import SearchBar from './components/common/SearchBar.vue';
import VolumeSlider from './components/common/VolumeSlider.vue';
</script>

<template>
  <BaseButton :rounded=true color="red" size="sm"></BaseButton>
  <BaseIcon name='google' size="lg" />



  <VolumeSlider />
  <SearchBar/>

</template>
