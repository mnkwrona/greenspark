<script lang="ts" setup>
/**
 * Color selector control component
 */
import type { Color } from '../types/Color'
import { computed } from 'vue'

const props = defineProps<{
  /**
   * Value property
   */
  modelValue: Color
  /**
   * Color options
   */
  options: Color[]
  /**
   * Disabled state
   */
  disabled: boolean
}>()

const emit = defineEmits<{
  /**
   * Color value emitted on selection
   */
  (e: 'update:modelValue', color: Color): void
}>()

const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
/**
 * Component's style classes
 *
 * @param {Color} option Color option
 * @returns {String} style classes
 */

const classes = (option: Color): string => {
  const isSelected = selected.value === option

  const variants = {
    white: `bg-[--color-select-white] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-white]'}`,
    black: `bg-[--color-select-black] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-black]'}`,
    blue: `bg-[--color-select-blue] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-blue]'}`,
    green: `bg-[--color-select-green] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-green]'}`,
    beige: `bg-[--color-select-beige] ${isSelected ? 'border-[--color-select-selected]' : 'border-[--gs-c-beige]'}`
  }

  return `${variants[option as keyof typeof variants]} ${!props.disabled && 'hover:opacity-80'}`
}

const wrapperClasses = computed(() => {
  return {
    'cursor-not-allowed': props.disabled
  }
})

const clickHandler = (option: Color) => {
  !props.disabled && (selected.value = option)
}
</script>

<template>
  <div class="gs-color-select flex flex-row gap-[4px] items-center" :class="wrapperClasses">
    <div
      v-for="(option, index) in options"
      :key="index"
      role="input"
      class="h-[16px] w-[16px] border-solid border-[2px]"
      :class="classes(option)"
      @click="clickHandler(option)"
    ></div>
  </div>
</template>
