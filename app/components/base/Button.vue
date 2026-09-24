```vue
<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'danger'
    | 'circle'

type ButtonSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'icon'

type ButtonColor =
    | 'white'
    | 'red'
    | 'lightGrey'
    | 'darkGrey'

interface Props {
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
    rounded?: boolean
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    color: 'lightGrey',
    rounded: true,
    disabled: false,
    loading: false,
    type: 'button',
    fullWidth: false,
})

const colors: Record<
    ButtonColor,
    {
        background: string
        text: string
        hover: string
    }
> = {
    white: {
        background: '#FFFFFF',
        text: '#1B1C1C',
        hover: '#F5F5F5',
    },

    red: {
        background: '#BA0036',
        text: '#FFFFFF',
        hover: '#9E002E',
    },

    lightGrey: {
        background: '#EFEDED',
        text: '#1B1C1C',
        hover: '#E2E0E0',
    },

    darkGrey: {
        background: '#1B1C1C',
        text: '#FFFFFF',
        hover: '#303131',
    },
}

const currentColor = computed(() => colors[props.color])

const isDisabled = computed(() => {
    return props.disabled || props.loading
})

const buttonClasses = computed(() => [
    'inline-flex items-center justify-center',
    'font-medium',
    'transition-colors duration-200',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',

    props.rounded ? 'rounded-full' : 'rounded-2xl',

    {
        'p-2 text-xs gap-2':
            props.size === 'xs',

        'p-3 text-sm gap-2':
            props.size === 'sm',

        'p-4 text-sm gap-2':
            props.size === 'md',

        'p-5 text-base gap-2':
            props.size === 'lg',

        'p-8 text-lg gap-2':
            props.size === 'xl',

        'h-11 w-11 gap-2':
            props.size === 'icon',
    },

    {
        'w-full':
            props.fullWidth,
    },
])

const buttonStyles = computed(() => ({
    '--button-background': currentColor.value.background,
    '--button-text': currentColor.value.text,
    '--button-hover': currentColor.value.hover,

    backgroundColor: 'var(--button-background)',
    color: 'var(--button-text)',
}))
</script>

<template>
    <button
        :type="type"
        :disabled="isDisabled"
        :class="buttonClasses"
        :style="{
            ...buttonStyles,
            '--button-hover': currentColor.hover,
        }"
    >
        <span
            v-if="loading"
            class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
        />

        <span
            v-if="$slots.icon && !loading"
            class="shrink-0"
        >
            <slot name="icon" />
        </span>

        <span v-if="size !== 'icon'">
            <slot />
        </span>

        <slot v-else name="icon" />
    </button>
</template>

<style scoped>
button:hover:not(:disabled) {
    background-color: var(--button-hover);
}
</style>
```
