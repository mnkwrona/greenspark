<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean
}>()

const toggled = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const buttonClasses = computed(() => {
  return {
    'bg-[--color-toggle-fill]': !toggled.value,
    'bg-[--color-toggle-fill-selected] border-[--color-toggle-button-selected]': toggled.value
  }
})

const outerRingClasses = computed(() => {
  return { 'translate-x-[25%] left-auto': toggled.value }
})

const innerRingClasses = computed(() => {
  return { 'border-[--color-toggle-circle-selected]': toggled.value }
})
</script>

<template>
  <div class="gs-toggle flex items-center">
    <button
      class="border-solid border-[1px] border-[--color-toggle-button] rounded-[11.5px] relative hover:shadow-inner hover:cursor-auto h-[20px] w-[40px] transition-all duration-500"
      :class="buttonClasses"
      @click="toggled = !toggled"
    >
      <div
        class="ring-outer h-[38px] w-[38px] rounded-[50%] absolute left-[-10px] top-[-10px] transition-all duration-500 transform"
        :class="outerRingClasses"
      >
        <div
          class="bg-[--color-toggle-fill] border-solid border-[1px] border-[--color-toggle-circle] absolute left-[9px] top-[9px] h-[20px] w-[20px] z-1 content-center rounded-[50%] drop-shadow-sm"
          :class="innerRingClasses"
        ></div>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.gs-toggle {
  button {
    &:hover {
      .ring-outer {
        background-color: var(--color-toggle-hover-ring);
      }
    }
  }
}
</style>
