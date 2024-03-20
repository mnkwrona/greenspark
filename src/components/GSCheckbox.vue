<script lang="ts" setup>
import { ref } from 'vue'

const selected = ref(false)

const emit = defineEmits(['checked'])

const handleClick = () => {
  selected.value = !selected.value
  emit('checked', selected.value)
}
</script>

<template>
  <div
    class="gs-checkbox flex items-center justify-center h-[70px] w-[70px] hover:bg-[--color-toggle-background-hover] rounded-[50%] hover:opacity-50 transition-all duration-500"
    @click="handleClick"
  >
    <svg v-if="selected" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.625 0.625H4.375C2.3125 0.625 0.625 2.3125 0.625 4.375V30.625C0.625 32.6875 2.3125 34.375 4.375 34.375H30.625C32.6875 34.375 34.375 32.6875 34.375 30.625V4.375C34.375 2.3125 32.6875 0.625 30.625 0.625ZM15.0813 25.5438C14.35 26.275 13.1688 26.275 12.4375 25.5438L5.70625 18.8125C4.975 18.0812 4.975 16.9 5.70625 16.1687C6.4375 15.4375 7.61875 15.4375 8.35 16.1687L13.75 21.5688L26.65 8.66875C27.3812 7.9375 28.5625 7.9375 29.2938 8.66875C30.025 9.4 30.025 10.5812 29.2938 11.3125L15.0813 25.5438V25.5438Z"
        fill="var(--gs-c-green)"
      />
    </svg>

    <svg v-else width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.75 30.625H6.25C5.21875 30.625 4.375 29.7813 4.375 28.75V6.25C4.375 5.21875 5.21875 4.375 6.25 4.375H28.75C29.7813 4.375 30.625 5.21875 30.625 6.25V28.75C30.625 29.7813 29.7813 30.625 28.75 30.625ZM30.625 0.625H4.375C2.3125 0.625 0.625 2.3125 0.625 4.375V30.625C0.625 32.6875 2.3125 34.375 4.375 34.375H30.625C32.6875 34.375 34.375 32.6875 34.375 30.625V4.375C34.375 2.3125 32.6875 0.625 30.625 0.625Z"
        fill="var(--gs-c-black)"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
