<script setup lang="ts">
import { navigationItems } from '~/utils/navigation'

type NavigatorType = 'Mobile' | 'Desktop'

interface Props {
    type?: NavigatorType
}

const props = withDefaults(defineProps<Props>(), {
    type: 'Desktop',
})

const currentRoute = useRoute()

const isActive = (route: string) => {
    return currentRoute.path === route
}
</script>

<template>
    <nav class="flex flex-row items-center gap-2">
        <NuxtLink v-for="item in navigationItems" :key="item.route" :to="item.route">
            <BaseButton :active="isActive(item.route)" variant="text" shape="pill" size="sm"
                :color="props.type === 'Mobile' ? 'white' : 'lightGrey'">

                {{ item.label }}

            </BaseButton>
        </NuxtLink>
    </nav>
</template>