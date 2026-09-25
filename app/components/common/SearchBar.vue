<script setup lang="ts">
const {
    placeholder,
} = usePlaceholder()
</script>

<template>
    <div class="relative">
        <BaseIcon name="search" size="sm" class="absolute  left-3 top-1/2 -translate-y-1/2" />
        <BaseInput :placeholder='placeholder' size="md" class="pl-9" />
    </div>
</template>