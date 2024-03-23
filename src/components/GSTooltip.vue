<script lang="ts" setup>
/**
 * Tooltip with trigger slot component
 */
import { defineAsyncComponent, ref } from 'vue'

const GSIconInfo = defineAsyncComponent(() => import('./icons/GSIconInfo.vue'))

/**
 * Show tooltip.
 */
const show = ref(false)
</script>

<template>
  <div class="gs-tooltip relative">
    <button
      @mouseover="show = true"
      @mousemove="show = true"
      @mouseleave="show = false"
      class="h-[12px] w-[12px]"
    >
      <slot name="trigger">
        <GSIconInfo color="green" />
      </slot>
    </button>

    <transition
      v-show="show"
      role="tooltip"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-300"
      leave-active-class="transition delay-300 duration-300"
      class="absolute bg-[--color-tooltip-bg] translate-x-[-50%] ml-[10px] drop-shadow-md bottom-[100%] mb-[8px] z-50 tooltip text-center rounded-[4px] w-[250px]"
      @mouseover="show = true"
      @mouseleave="show = false"
    >
      <div class="py-[24px] px-[16px] text-[--color-tooltip-text]">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>
