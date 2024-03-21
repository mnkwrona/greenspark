<script lang="ts" setup>
import { ref } from 'vue'
import GSIconInfo from './icons/GSIconInfo.vue'

const show = ref(false)
</script>

<template>
  <div class="gs-tooltip relative h-[32px] w-[32px]">
    <button
      @mouseover="show = true"
      @mousemove="show = true"
      @mouseleave="show = false"
      class="h-[20px] w-[20px]"
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
      class="absolute bg-[--color-tooltip-bg] translate-x-[-50%] ml-[10px] drop-shadow-md bottom-[100%] mb-[10px] z-50 tooltip text-center rounded-[4px]"
      @mouseover="show = true"
      @mouseleave="show = false"
    >
      <div class="py-[24px] px-[16px]">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>
