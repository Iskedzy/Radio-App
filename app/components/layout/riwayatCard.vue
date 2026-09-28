<script setup lang="ts">
import RiwayatItems from "../common/riwayatItems.vue";
</script>

<template>
  <div class="flex flex-col w-full mb-[10rem] mt-5">
    <div class="flex flex-row justify-between items-center w-full px-5">
      <BaseText type="h2" size="lg" color="darkGrey" track="wide">
        Riwayat Terakhir
      </BaseText>

      <NuxtLink to="/riwayat">
        <BaseText type="h2" size="xs" color="lightGrey" track="wide"> 
            3 statsiun kemarin
        </BaseText>
      </NuxtLink>
    </div>

    <RiwayatItems />

  </div>
</template>
