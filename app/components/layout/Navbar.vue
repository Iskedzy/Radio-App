<script setup lang="ts">
import { navigationItems } from '~/utils/navigation'

const route = useRoute()

const isActive = (itemRoute: string) => {
  return route.path === itemRoute
}

const getIconPath = (icon: string) => {
  return `/assets/icons/nav/${icon}.svg`
}

const getColor = (itemRoute: string) => {
  return isActive(itemRoute) ? '#BA0036' : '#EFEDED'
}
</script>

<template>
  <nav
    class="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-40px)] max-w-md -translate-x-1/2 items-center justify-between rounded-full bg-white px-4 py-3 shadow-lg sm:hidden"
  >
    <NuxtLink
      v-for="item in navigationItems"
      :key="item.route"
      :to="item.route"
      class="flex flex-1 flex-col items-center justify-center gap-1"
    >
      <!-- Icon -->
      <span
        class="h-5 w-5"
        :style="{
          backgroundColor: getColor(item.route),
          mask: `url('${getIconPath(item.icon)}') center / contain no-repeat`,
          WebkitMask: `url('${getIconPath(item.icon)}') center / contain no-repeat`,
        }"
      />

      <!-- Label -->
      <span
        class="text-[10px] font-medium"
        :style="{
          color: getColor(item.route),
        }"
      >
        {{ item.label }}
      </span>
    </NuxtLink>
  </nav>
</template>
