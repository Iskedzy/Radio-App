<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center gap-5">
    <BaseButton
      variant="primary"
      :rounded="true"
      color="lightGrey"
      size="sm"
      class="flex justify-center items-center w-[3.5rem] h-[3.5rem] shrink-0"
    >
      <BaseIcon name="previous" size="md" />
    </BaseButton>

    <BaseButton
      variant="primary"
      :rounded="true"
      color="red"
      size="sm"
      class="flex justify-center items-center w-[4rem] h-[4rem] shrink-0"
    >
      <BaseIcon name="play-white" size="md" />
    </BaseButton>

    <BaseButton
      variant="primary"
      :rounded="true"
      color="lightGrey"
      size="sm"
      class="flex justify-center items-center w-[3.5rem] h-[3.5rem] shrink-0"
    >
      <BaseIcon name="next" size="md" />
    </BaseButton>
  </div>
</template>
