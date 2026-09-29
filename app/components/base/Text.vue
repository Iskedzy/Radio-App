<script setup lang="ts">
import { computed } from 'vue';

type TextType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'p'

type TextSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'

type TextColor =
    | 'red'
    | 'lightGrey'
    | 'darkGrey'
    | 'brown'

type TextTracking = 
    | 'none'
    | 'wide'
    | 'wider'
    | 'widest'

interface Props {
    type?: TextType
    size?: TextSize
    color?: TextColor
    track?: TextTracking
    wrap?: boolean
    textFont?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'p',
    size: 'sm',
    color: 'darkGrey',
    track: 'none' ,
    wrap: false,
    textFont : 'Inter',
})

const TextTrack: Record<TextTracking, string> = {
    none : 'tracking-none',
    wide : 'tracking-wide',
    wider : 'tracking-wider',
    widest : 'tracking-widest'
}

const TextColor: Record<TextColor, string> = {
    red: 'text-[#BA0036]',
    lightGrey: 'text-[#5F5E5E]',
    darkGrey: 'text-[#1B1C1C]',
    brown: 'text-[#5C3F41]'
}

const TextTypes: Record<TextType, string> = {
    h1: 'font-black',
    h2: 'font-bold',
    h3: 'font-semibold',
    p: 'font-normal',
}

const TextSizes: Record<TextSize, string> = {
    xs: 'text-[10px]',
    sm: 'text-[12px]',
    md: 'text-[14px]',
    lg: 'text-[16px]',
    xl: 'text-[24px]',
    '2xl':'text-[30px]',
}

const CurrentClass = computed(() => [
    TextTypes[props.type],
    TextSizes[props.size],
    TextColor[props.color],
    TextTrack[props.track],
    props.wrap ? 'whitespace-normal' : 'whitespace-nowrap' ,
    props.textFont
])

</script>

<template>
    <component
    :is="type"
    :class="CurrentClass">
    <slot />
</component>

</template>