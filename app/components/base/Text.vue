<script setup lang="ts">
import { computed } from 'vue';

type TextType =
    | 'h1'
    | 'h2'
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

interface Props {
    type?: TextType
    size?: TextSize
    color?: TextColor
    textFont?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'p',
    size: 'sm',
    color: 'darkGrey',
    textFont : 'Inter',
})

const TextColor: Record<TextColor, string> = {
    red: 'text-[#BA0036]',
    lightGrey: 'text-[#5F5E5E]',
    darkGrey: 'text-[#1B1C1C]'
}

const TextTypes: Record<TextType, string> = {
    h1: 'font-bold',
    h2: 'font-semibold',
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