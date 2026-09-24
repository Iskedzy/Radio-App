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

interface Props {
    type?: TextType
    size?: TextSize
    textFont?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'p',
    size: 'sm',
    textFont : 'Intern'
})

const TextTypes: Record<TextType, string> = {
    h1: 'font-bold',
    h2: 'font-semibold',
    p: 'font-reguler',
}

const TextSizes: Record<TextSize, string> = {
    xs: 'text-[10px]',
    sm: 'text-[12px]',
    md: 'text-[14px]',
    lg: 'text-[16px]',
    xl: 'text-[20px]',
    '2xl':'text-[30px]',
}

const CurrentClass = computed(() => [
    TextTypes[props.type],
    TextSizes[props.size],
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