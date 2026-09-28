<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import Images from "../base/Images.vue";
import MediaControl from "../common/mediaControl.vue";

const container = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

const containerWidth = ref(0);
const contentWidth = ref(0);
const duration = ref(0);
const shouldScroll = ref(false);

let observer: ResizeObserver | null = null;

const checkOverflow = async () => {
  await nextTick();

  if (!container.value || !content.value) return;

  containerWidth.value = container.value.clientWidth;
  contentWidth.value = content.value.scrollWidth;

  if (contentWidth.value > containerWidth.value) {
    shouldScroll.value = true;

    const distance = contentWidth.value - containerWidth.value;

    duration.value = Math.max(3, distance / 40);
  } else {
    shouldScroll.value = false;
    duration.value = 0;
  }
};

onMounted(async () => {
  await checkOverflow();

  if (container.value) {
    observer = new ResizeObserver(() => {
      checkOverflow();
    });

    observer.observe(container.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-t from-white from-30% to-white/0 to-40% rounded-3xl shadow w-full h-[35rem]"
  >
    <div class="flex flex-col justify-center shrink-0 p-4 w-full gap-5">
      <div class="flex justify-between items-center w-full">
        <div class="flex justify-center items-center gap-2">
          <div
            class="flex items-center justify-center px-2.5 bg-[#BA0036]/10 rounded-full"
          >
            <BaseText type="h2" size="xs" color="red" track="wide">
              TERPILIH
            </BaseText>
          </div>

          <BaseText type="h2" size="sm" color="darkGrey" track="wide">
            Prambors Radio
          </BaseText>
        </div>

        <div
          class="flex flex-row justify-center items-center px-2 py-0.5 bg-[#EFEDED] rounded-full gap-1"
        >
          <BaseIcon name="wave" size="xs" />

          <BaseText type="h2" size="xs" color="brown" track="wide">
            102.2 FM
          </BaseText>
        </div>
      </div>

      <div class="flex items-center w-full justify-center">
        <BaseImages
          type="rounded"
          size="lg"
          src="Heroes"
          class="shadow shadow-lg"
        >
          <span></span>
        </BaseImages>
      </div>

      <div class="flex flex-row justify-between w-full mt-5">
        <div class="flex flex-col items-start min-w-0">
          <BaseText type="h2" size="xs" color="lightGrey" track="wide">
            SIARAN LANGSUNG • STUDIO 1
          </BaseText>

          <BaseText type="h2" size="xl" color="darkGrey" track="wide">
            Midnight Soul Journey
          </BaseText>

          <div ref="container" class="w-[18rem] overflow-hidden shrink-0">
            <div
              ref="content"
              class="w-max whitespace-nowrap"
              :class="{
                'animate-marquee': shouldScroll,
              }"
              :style="{
                '--marquee-distance': `-${Math.max(
                  0,
                  contentWidth - containerWidth,
                )}px`,
                '--marquee-duration': `${duration}s`,
              }"
            >
              <BaseText type="p" size="md" color="lightGrey" track="wide">
                Bersama DJ Arya Pratama • 24.8k Pendengar
              </BaseText>
            </div>
          </div>
        </div>
      </div>

      <MediaControl/>

      <div
        class="flex justify-between full w-full py-2 px-5 bg-[#EFEDED] rounded-full"
      >
        <div class="flex gap-3">
          <BaseIcon name="signal-speed" size="sm" />
          <BaseText type="h3" size="sm" color="lightGrey" track="wide">
            Kualitas HD Audio 320kbps
          </BaseText>
        </div>
        <BaseText type="h2" size="sm" color="red" track="wide">
          LIVE ON-AIR
        </BaseText>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--marquee-duration) ease-in-out infinite alternate;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(var(--marquee-distance));
  }
}
</style>
