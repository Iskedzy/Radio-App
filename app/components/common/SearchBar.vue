<script setup lang="ts">
import { computed } from "vue";

type SearchBarType = "Mobile" | "Desktop";

interface Props {
  type?: SearchBarType;
}

const props = withDefaults(defineProps<Props>(), {
  type: "Desktop",
});

const { placeholder } = usePlaceholder();
</script>

<template>
  <div
    :class="[
      'relative',
      props.type === 'Mobile' ? 'rounded-full bg-gradient-to-r  from-white  from-50% to-[#BA0036]/5 to-70% p-5 w-[25rem] shadow' : '',
    ]"
  >
    <BaseIcon
      name="search"
      size="sm"
      class="absolute left-9 lg:left-5 top-1/2 -translate-y-1/2"
    />

    <BaseInput
      :placeholder="placeholder"
      size="md"
      :class="['pl-10 lg:pl-10', props.type === 'Mobile' ? 'rounded-full shadow' : '']"
    />
  </div>
</template>
