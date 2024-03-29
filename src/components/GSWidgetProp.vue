<script lang="ts" setup>
/**
 * Widget Property component
 */
</script>

<template>
  <div class="gs-widget-prop flex flex-row justify-between">
    <p class="text-[--color-prop-label]">
      <slot name="label" />
    </p>
    <slot name="control" />
  </div>
</template>
