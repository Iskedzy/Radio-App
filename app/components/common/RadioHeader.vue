<script setup lang="ts">
import Text from '../base/Text.vue'
</script>

<template>
  <a href="#">
    <div class="flex justify-center items-center gap-2">
      <div
        class="flex shrink-0 justify-center items-center p-3 text-sm gap-2 bg-[#BA0036] rounded-full"
      >
        <BaseIcon name="AuroRadio" size="sm" />
      </div>
      <div class="flex items-center gap-2.5">
        <Text type="h1" size="xl"> Aura </Text>
        <Text type="h1" size="xl" color="red"> Radio </Text>
        <div class="w-3 h-3 bg-[#BA0036] rounded-full" />
      </div>
    </div>
  </a>
</template>
