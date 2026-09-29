<script setup lang="ts">
import { computed } from 'vue'

type ImageType =
    | '4x3'
    | '1x1'
    | 'rounded'

type ImageSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

interface Props {
    src: string
    type?: ImageType
    size?: ImageSize
}

const props = withDefaults(defineProps<Props>(), {
    type: '4x3',
    size: 'md',
})

const imageSizes: Record<ImageSize, string> = {
    xs: 'w-[3rem]',
    sm: 'w-[5rem]',
    md: 'w-[10rem]',
    lg: 'w-[15rem]',
    xl: 'w-[18rem]',
}

const imageTypes: Record<ImageType, String> = {
    '4x3': 'aspect-[4/3] rounded-2xl',
    '1x1': 'aspect-square rounded-2xl',
    'rounded': 'aspect-square rounded-full',
}

const imageClasses = computed(() => [
    imageSizes[props.size],
    imageTypes[props.type],
    'bg-cover bg-center bg-no-repeat',
])

const imagePath = computed(() => {
    return `/assets/images/${props.src}.png`
})

const imageStyle = computed(() => ({
    backgroundImage: `url("${imagePath.value}")`
}))

</script>

<template>
    <div 
    :class="imageClasses" 
    :style="imageStyle"
    >
        <slot />

    </div>

</template>