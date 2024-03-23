<script lang="ts" setup>
/**
 * Checkbox control component
 */
import { computed } from 'vue'

const emit = defineEmits<{
  /**
   * Value emitted on click
   */
  (e: 'update:modelValue', value: boolean): void
}>()

const props = defineProps<{
  /**
   * Value property
   */
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
      <img v-if="selected" src="../assets/IconCheckboxChecked.svg" />
      <img v-else src="../assets/IconCheckboxUnchecked.svg" />
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
