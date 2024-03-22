<script lang="ts" setup>
import type Color from '@/types/Color'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: Color
  options: Color[]
}>()

// @TODO type emit
const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const classes = (option: Color): string => {
  const isSelected = selected.value === option

  const variants = {
    white: `bg-[--color-select-white] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-white]'}`,
    black: `bg-[--color-select-black] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-black]'}`,
    blue: `bg-[--color-select-blue] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-blue]'}`,
    green: `bg-[--color-select-green] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-green]'}`,
    beige: `bg-[--color-select-beige] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-beige]'}`
  }

  return variants[option]
}
</script>

<template>
  <div class="gs-color-select flex flex-row gap-[4px] items-center">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="h-[16px] w-[16px] border-solid border-[2px] hover:opacity-80"
      :class="classes(option)"
      @click="selected = option"
    ></div>
  </div>
</template>
