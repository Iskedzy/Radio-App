<script setup lang="ts">
import { computed } from 'vue'

type IconSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'

const iconSizes: Record<IconSize, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-8 h-8',
}

interface Props {
    name: string
    size?: IconSize
    alt?: string
    color?:string
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    alt: 'icon',
})

const iconClasses = computed(() => {
    return iconSizes[props.size]
})

const iconPath = computed(() => {
    return `/assets/icons/${props.name}.svg`
})
</script>

<template>
    <img :src="iconPath" :alt="alt" :class="iconClasses" /> 
</template> 