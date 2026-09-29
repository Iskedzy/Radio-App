<script setup lang="ts">

const {
    volume,
} = useVolume()

</script>

<template>
        <div class="flex justify-center items-center gap-3">
            <BaseIcon name="volume" size="md" />
            <BaseInput v-model="volume" size="xs" type="range" :min="0" :max="100" :step="1" class="flex-1" />
            <span class=" shrink-0 text-nowrap leading-none">{{ volume }} %</span>
        </div>
</template>