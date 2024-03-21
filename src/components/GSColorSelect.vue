<script lang="ts" setup>
import type Color from '@/types/Color'

const props = defineProps<{
  selected: Color
  options: Color[]
}>()

const emit = defineEmits(['selected'])

const styles = (option: Color): object => {
  return {
    'background-color': `var(--color-select-${option})`,
    'border-color':
      props.selected === option ? 'var(--color-select-selected)' : `var(--gs-c-${option})`
  }
}

const handleClick = (option: Color) => {
  emit('selected', option)
}
</script>

<template>
  <div class="gs-color-select flex flex-row gap-[4px]">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="h-[28px] w-[28px] border-solid border-[3px] hover:opacity-80"
      :style="styles(option)"
      @click="handleClick(option)"
    ></div>
  </div>
</template>
