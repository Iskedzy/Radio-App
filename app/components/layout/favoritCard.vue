<script setup lang="ts">
import favoriteItems from "../common/favoriteItems.vue";
</script>

<template>
  <div class="flex justify-between items-center w-full px-5 mt-5">
    <div>
      <BaseText type="h2" size="lg" color="darkGrey" track="wide">
        Favorit Pendengar
      </BaseText>
      <div class="hidden">
        <BaseText type="p" size="sm" color="lightGrey" track="wide">
          Paling sering diputar malam ini di sekitarmu
        </BaseText>
      </div>
    </div>
    <NuxtLink to="/favorit">
      <BaseText type="h2" size="sm" color="red" track="wide">
        Lihat semua
      </BaseText>
    </NuxtLink>
  </div>

  <div>
    <favoriteItems />
  </div>
</template>
