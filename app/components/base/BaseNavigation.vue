<script setup lang="ts">
import { navigationItems } from '~/utils/navigation'

const currentRoute = useRoute()

const isActive = (route: string) => {
    return currentRoute.path === route
}
</script>

<template>
    <nav class="flex items-center gap-2">
        <NuxtLink v-for="item in navigationItems" :key="item.route" :to="item.route">
            <BaseButton :active="isActive(item.route)" variant="ghost" size="sm" sm:color="lightGrey">
                {{ item.label }}
            </BaseButton>
        </NuxtLink>
    </nav>
</template>