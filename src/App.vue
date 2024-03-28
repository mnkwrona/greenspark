<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const GSProductWidgetsManager = defineAsyncComponent(
  () => import('./components/GSProductWidgetsManager.vue')
)
</script>

<template>
  <main class="flex min-h-screen px-10 py-10 lg:pt-44">
    <div class="flex mx-auto max-w-[850px] w-full">
      <GSProductWidgetsManager />
    </div>
  </main>
</template>
