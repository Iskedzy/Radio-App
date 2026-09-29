<script setup lang="ts">
import { computed } from 'vue'

type InputType = 'search' | 'range'

type InputSize = 'xs' | 'sm' | 'md' | 'lg'

interface Props {
  type?: InputType
  modelValue?: string | number
  placeholder?: string
  size?: InputSize
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'search',
  modelValue: '',
  placeholder: '',
  size: 'md',
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const inputValue = computed({
  get: () => props.modelValue,

  set: (value) => {
    emit('update:modelValue', value)
  },
})

const inputSizes: Record<InputSize, string> = {
  xs: 'h-8 text-xs',
  sm: 'h-9 text-sm',
  md: 'h-11 text-sm',
  lg: 'h-12 text-base',
}

const rangeProgress = computed(() => {
  const value = Number(props.modelValue)

  const range = props.max - props.min

  if (range <= 0) {
    return '0%'
  }

  const progress = ((value - props.min) / range) * 100

  return `${Math.min(Math.max(progress, 0), 100)}%`
})

const searchClasses = computed(() => [
  'w-full',
  'rounded-full',
  'bg-[#F5F3F3]',
  'px-4',
  'text-[#1B1C1C]',
  'placeholder:text-[#5F5E5E]',
  'transition-colors',
  'duration-200',
  'focus:outline-none',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',

  inputSizes[props.size],
])
</script>

<template>
  <input
    v-if="type === 'search'"
    v-model="inputValue"
    type="search"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="searchClasses"
  />

  <input
    v-else
    v-model.number="inputValue"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :style="{
      '--progress': rangeProgress,
    }"
    class="base-range"
  />
</template>

<style scoped>
input[type='search']::-webkit-search-cancel-button {
  appearance: none;
}

.base-range {
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;

  background: linear-gradient(
    to right,
    #ba0036 0%,
    #ba0036 var(--progress),
    #e9e8e7 var(--progress),
    #e9e8e7 100%
  );

  cursor: pointer;
}

.base-range::-webkit-slider-runnable-track {
  appearance: none;
  height: 6px;
  border-radius: 999px;
  background: transparent;
}

.base-range::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 14px;
  margin-top: -4px;

  border: none;
  border-radius: 50%;

  background: #ffffff;

  cursor: pointer;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.base-range::-moz-range-track {
  height: 6px;
  border-radius: 999px;
  background: #e9e8e7;
}

.base-range::-moz-range-progress {
  height: 6px;
  border-radius: 999px;
  background: #ba0036;
}

.base-range::-moz-range-thumb {
  width: 14px;
  height: 14px;

  border: none;
  border-radius: 50%;

  background: #ffffff;

  cursor: pointer;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.base-range:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
