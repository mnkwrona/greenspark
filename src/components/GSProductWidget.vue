<script setup lang="ts">
/**
 * Product widget component
 */
import { computed, defineAsyncComponent } from 'vue'

import type { Color } from '@/types/Color'
import type UpdateEvent from '@/types/UpdateEvent'
import type Widget from '@/types/Widget'

const GSCheckbox = defineAsyncComponent(() => import('./GSCheckbox.vue'))
const GSColorSelect = defineAsyncComponent(() => import('./GSColorSelect.vue'))
const GSLogo = defineAsyncComponent(() => import('./GSLogo.vue'))
const GSSkeleton = defineAsyncComponent(()=> import('./GSSkeleton.vue'))
const GSToggle = defineAsyncComponent(() => import('./GSToggle.vue'))
const GSTooltip = defineAsyncComponent(() => import('./GSTooltip.vue'))
const GSWidgetProp = defineAsyncComponent(() => import('./GSWidgetProp.vue'))

const colors: Color[] = ['blue', 'green', 'beige', 'white', 'black']

const props = defineProps<{
 /**
  * Widget details
  */
  widget: Widget | null
}>()

const emit = defineEmits<{
 /**
  * Update event
  */
  (e: 'updated', propertyObj: UpdateEvent): void
}>()

/**
 * Logo color computed from
 * selected color of widget
 */
const logoColor = computed(() => {
  if (props.widget?.selectedColor) {
    return ['beige', 'white'].includes(props.widget.selectedColor) ? 'green' : 'beige'

  }
})

/**
 * Subheader copy
 */
const subheader = computed(() => {
  return `this product ${props.widget?.action}`
})

/**
 * Header copy
 */
const header = computed(() => {
  return `${props.widget?.amount}${props.widget?.type === 'carbon' ? 'kgs of' : ''} ${props.widget?.type}`
})

/**
 * Handles value changes from controls.
 * @param {Boolean | String} eventVal Changed property's value
 * @param { String} propName Changed property's name
 */
const handleChange = (eventVal: boolean | string | Color , propName: string) => {
  emit('updated', { property: propName, value: eventVal })
}

/**
 * Header style classes computed
 * from selected widget type.
 */
const headerClasses = computed(() => {
  const variants = {
    white: 'bg-[--color-header-bg-white] text-[--color-header-font-dark]',
    black: 'bg-[--color-header-bg-black] text-[--color-header-font]',
    blue: 'bg-[--color-header-bg-blue] text-[--color-header-font]',
    green: 'bg-[--color-header-bg-green] text-[--color-header-font]',
    beige: 'bg-[--color-header-bg-beige] text-[--color-header-font-dark]'
  }

  return variants[props.widget?.selectedColor as keyof typeof variants]
})
</script>

<template>
  <div class="gs-product-widget h-[66px] w-full">
    <div v-if="widget" class="flex flex-col gap-[10px]">
      <div class="flex flex-row gap-[12px] p-[8px] rounded-[6px]" :class="headerClasses">
        <div>
          <GSLogo :color="logoColor" class="h-[45px]" />
        </div>
        <div class="flex flex-col">
          <p class="text-xs">{{ subheader }}</p>
          <p class="font-bold text-lg">{{ header }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-[10px]">
        <GSWidgetProp>
          <template #label>
            <div class="flex flex-row gap-1">
              Link to Public Profile
              <GSTooltip>
                <template #content>
                  <p>
                    This widget links directly to your public profile so that you can easily share
                    your impact with your customers. Turn it off here if you do not want the badge to
                    link to it.
                  </p>
                  <div class="mt-[8px]">
                    <a href="/" class="text-[--color-tooltip-link] font-bold">
                      View Public Profile
                    </a>
                  </div>
                </template>
              </GSTooltip>
            </div>
          </template>
          <template #control>
            <GSCheckbox
              :modelValue="widget.linked"
              class="h-[24px] w-[24px]"
              @update:modelValue="handleChange($event, 'linked')"
            />
          </template>
        </GSWidgetProp>

        <GSWidgetProp>
          <template #label>Badge colour</template>
          <template #control>
            <GSColorSelect
              :options="colors"
              :modelValue="widget.selectedColor"
              @update:modelValue="handleChange($event, 'selectedColor')"
            />
          </template>
        </GSWidgetProp>

        <GSWidgetProp>
          <template #label>Activate badge</template>
          <template #control>
            <GSToggle
              :modelValue="widget.active"
              @update:modelValue="handleChange($event, 'active')"
            />
          </template>
        </GSWidgetProp>
      </div>
    </div>

    <GSSkeleton v-else class="min-h-[163px]" />
 </div>
</template>
