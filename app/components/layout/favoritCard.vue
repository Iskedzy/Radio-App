<script setup lang="ts">
import favoriteItems from '../common/favoriteItems.vue';

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-5 py-5">
        <div class="flex justify-between w-full justify-center items-center gap-[4rem] shrink-0 px-5">
            <div>
                <BaseText type="h2" size="lg" color="darkGrey" track="wide">
                    Favorit Pendengar
                </BaseText>
                <BaseText type="p" size="sm" color="lightGrey" track="wide">
                    Paling sering diputar malam ini di sekitarmu
                </BaseText>
            </div>
            <NuxtLink to="/favorit">
                <BaseText type="h2" size="sm" color="red" track="wide">
                    Lihat semua
                </BaseText>
            </NuxtLink>
        </div>

        <div>
            <favoriteItems/>
        </div>

    </div>
</template>