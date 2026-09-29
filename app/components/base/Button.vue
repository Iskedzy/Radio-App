<script setup lang="ts">
import { computed, ref } from 'vue'

type ButtonVariant = 'text' | 'outlined' | 'contained'

type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonShape = 'rounded' | 'pill' | 'circle'

type ButtonColor = 'primary' | 'secondary' | 'white' | 'lightGrey' | 'snow'

type ButtonType = 'button' | 'submit' | 'reset'

interface ColorToken {
  main: string
  contrast: string
  hover: string
  surface: string
  activeMain?: string
  activeContrast?: string
}

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  color?: ButtonColor
  active?: boolean
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: ButtonType
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  size: 'md',
  shape: 'rounded',
  color: 'primary',
  active: false,
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button',
})

const colors: Record<ButtonColor, ColorToken> = {
  primary: {
    main: '#BA0036',
    contrast: '#FFFFFF',
    hover: '#9E002E',
    surface: '#BA0036',
  },

  secondary: {
    main: '#1B1C1C',
    contrast: '#FFFFFF',
    hover: '#303131',
    surface: '#1B1C1C',
  },

  white: {
    main: '#FFFFFF',
    contrast: '#1B1C1C',
    hover: '#F5F5F5',
    surface: '#1B1C1C',
    activeContrast: '#BA0036',
  },

  lightGrey: {
    main: '#EFEDED',
    contrast: '#1B1C1C',
    hover: '#E2E0E0',
    surface: '#1B1C1C',
    activeMain: '#E9E8E7',
  },

  snow: {
    main: '#F5F3F3',
    contrast: '#1B1C1C',
    hover: '#E2E0E0',
    surface: '#1B1C1C',
    activeMain: '#1B1C1C',
    activeContrast: '#FFFFFF',
  },
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-2.5 py-1 text-[13px]',
  md: 'px-4 py-1.5 text-sm',
  lg: 'px-[22px] py-2 text-[15px]',
}

const buttonShapes: Record<ButtonShape, string> = {
  rounded: 'rounded',
  pill: 'rounded-full',
  circle: 'rounded-full',
}

const currentColor = computed(() => colors[props.color])

const isDisabled = computed(() => props.disabled || props.loading)

const buttonClasses = computed(() => [
  'btn',
  `btn--${props.variant}`,

  'relative inline-flex select-none items-center justify-center gap-2',
  'whitespace-nowrap font-medium leading-7',
  'transition-all duration-200 ease-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

  buttonSizes[props.size],
  buttonShapes[props.shape],

  props.shape !== 'circle' ? 'min-w-16' : '',

  {
    'w-full': props.fullWidth,
    'btn--active': props.active,
  },
])

const buttonStyles = computed(() => ({
  '--btn-main': currentColor.value.main,
  '--btn-contrast': currentColor.value.contrast,
  '--btn-hover': currentColor.value.hover,
  '--btn-surface': currentColor.value.surface,

  '--btn-active-main': currentColor.value.activeMain ?? currentColor.value.main,
  '--btn-active-contrast': currentColor.value.activeContrast ?? currentColor.value.contrast,

  '--btn-focus':
    props.variant === 'contained' ? currentColor.value.contrast : currentColor.value.surface,
}))

interface Ripple {
  id: number
  left: number
  top: number
  size: number
}

const buttonRef = ref<HTMLButtonElement | null>(null)
const ripples = ref<Ripple[]>([])

let rippleId = 0

const createRipple = (event: PointerEvent) => {
  if (isDisabled.value) {
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const element = buttonRef.value

  if (!element) {
    return
  }

  const bounds = element.getBoundingClientRect()
  const size = Math.max(bounds.width, bounds.height)

  ripples.value.push({
    id: rippleId++,
    left: event.clientX - bounds.left - size / 2,
    top: event.clientY - bounds.top - size / 2,
    size,
  })
}

const removeRipple = (id: number) => {
  ripples.value = ripples.value.filter((ripple) => ripple.id !== id)
}
</script>

<template>
  <button
    ref="buttonRef"
    :type="type"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
    :class="buttonClasses"
    :style="buttonStyles"
    @pointerdown="createRipple"
  >
    <span class="btn__ripple-layer" aria-hidden="true">
      <span
        v-for="ripple in ripples"
        :key="ripple.id"
        class="btn__ripple"
        :style="{
          left: `${ripple.left}px`,
          top: `${ripple.top}px`,
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
        }"
        @animationend="removeRipple(ripple.id)"
      />
    </span>

    <span v-if="loading" class="btn__spinner" aria-hidden="true" />

    <span v-if="$slots.icon && !loading" class="shrink-0">
      <slot name="icon" />
    </span>

    <slot />
  </button>
</template>

<style scoped>
.btn {
  --btn-overlay: color-mix(in srgb, var(--btn-surface) 8%, transparent);
  --btn-outline: color-mix(in srgb, var(--btn-surface) 50%, transparent);
  --btn-ripple: color-mix(in srgb, var(--btn-surface) 24%, transparent);
  --btn-ripple-invert: color-mix(in srgb, var(--btn-contrast) 35%, transparent);
}

/* text */

.btn--text {
  background-color: transparent;
  color: var(--btn-surface);
}

.btn--text:hover:not(:disabled) {
  background-color: var(--btn-overlay);
}

/* outlined */

.btn--outlined {
  background-color: transparent;
  color: var(--btn-surface);
}

.btn--outlined::after {
  content: '';
  position: absolute;
  inset: 0;

  border: 1px solid var(--btn-surface);
  border-color: var(--btn-outline);
  border-radius: inherit;

  pointer-events: none;
  transition: border-color 200ms ease-out;
}

.btn--outlined:hover:not(:disabled) {
  background-color: var(--btn-overlay);
}

.btn--outlined:hover:not(:disabled)::after {
  border-color: var(--btn-surface);
}

/* contained */

.btn--contained {
  background-color: var(--btn-main);
  color: var(--btn-contrast);

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}

.btn--contained:hover:not(:disabled) {
  background-color: var(--btn-hover);

  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24);
}

/* selected */

.btn--active {
  background-color: var(--btn-active-main);
  color: var(--btn-active-contrast);
}

.btn--outlined.btn--active::after {
  border-color: var(--btn-active-contrast);
}

/* states */

.btn:focus-visible {
  --tw-ring-color: var(--btn-focus);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.38;
}

/* ripple */

.btn__ripple-layer {
  position: absolute;
  inset: 0;

  overflow: hidden;
  border-radius: inherit;

  pointer-events: none;
}

.btn__ripple {
  position: absolute;

  border-radius: 9999px;
  background-color: var(--btn-ripple);

  animation: btn-ripple 550ms ease-out forwards;
}

.btn--contained .btn__ripple {
  background-color: var(--btn-ripple-invert);
}

/* loader */

.btn__spinner {
  display: inline-block;

  width: 1em;
  height: 1em;

  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 9999px;

  animation: btn-spin 700ms linear infinite;
}

@keyframes btn-ripple {
  from {
    opacity: 0.3;
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(1);
  }
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn,
  .btn__ripple {
    transition-duration: 1ms;
    animation-duration: 1ms;
  }

  .btn__spinner {
    animation-duration: 2s;
  }
}
</style>
