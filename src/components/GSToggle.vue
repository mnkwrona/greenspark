<script lang="ts" setup>
import { computed, ref } from 'vue'

const selected = ref(false)

const emit = defineEmits(['toggled'])

const handleClick = () => {
  selected.value = !selected.value
  emit('toggled', selected.value)
}
</script>

<template>
  <div class="gs-toggle">
    <button
      class="bg-[--color-toggle-fill] border-solid border-[1px] border-[--color-toggle-button] rounded-[11.5px] relative hover:shadow-inner h-[23px] w-[46px] transition-all duration-500"
      :class="{
        'bg-[--color-toggle-fill-selected]': selected,
        'border-[--color-toggle-button-selected]': selected
      }"
      @click="handleClick"
    >
      <div
        class="ring-outer h-[38px] w-[38px] rounded-[50%] absolute left-[-8.5px] top-[-8px] transition-all duration-500 transform"
        :class="{
          'translate-x-[23px]': selected,
          'left-auto': selected
        }"
      >
        <div
          class="bg-[--color-toggle-fill] border-solid border-[1px] border-[--color-toggle-circle] absolute left-[7.5px] top-[7px] h-[23px] w-[23px] z-1 content-center rounded-[50%] drop-shadow-sm"
          :class="{ 'border-[--color-toggle-circle-selected]': selected }"
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
