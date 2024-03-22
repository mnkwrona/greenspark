<script lang="ts" setup>
import { computed } from 'vue'

// @TODO type emit
const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: boolean
}>()

const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div
    class="gs-checkbox flex items-center justify-center hover:bg-[--color-toggle-background-hover] hover:ring-[10px] hover:ring-[--color-toggle-background-hover] rounded-[50%] hover:opacity-50 transition-all duration-300"
    @click="selected = !selected"
  >
    <transition
      name="fade"
      mode="out-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-200"
      class="flex justify-center align-center"
    >
      <img v-if="selected" src="./icons/IconCheckboxChecked.svg" />
      <img v-else src="./icons/IconCheckboxUnchecked.svg" />
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
