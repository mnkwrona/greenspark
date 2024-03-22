<script setup lang="ts">
import { computed } from 'vue'
import type Widget from '@/types/Widget'
import type Color from '@/types/Color'

import GSCheckbox from './GSCheckbox.vue'
import GSToggle from './GSToggle.vue'
import GSColorSelect from './GSColorSelect.vue'
import GSLogo from './GSLogo.vue'
import GSTooltip from './GSTooltip.vue'
import GSWidgetProp from './GSWidgetProp.vue'

const props = defineProps<{
  widget: Widget
}>()

const emit = defineEmits(['updated'])

const logoColor = computed(() => {
  return ['beige', 'white'].includes(props.widget.selectedColor) ? 'green' : 'beige'
})

const subheader = computed(() => {
  return `this product ${props.widget.action}`
})

const header = computed(() => {
  return `${props.widget.amount}${props.widget.type === 'carbon' ? 'kgs of' : ''} ${props.widget.type}`
})

const colors: Color[] = ['blue', 'green', 'beige', 'white', 'black']

const handleChange = (e, p) => {
  emit('updated', { property: p, value: e })
}

const headerClasses = computed((): string => {
  const variants = {
    white: 'bg-[--color-header-bg-white] text-[--color-header-font-dark]',
    black: 'bg-[--color-header-bg-black] text-[--color-header-font]',
    blue: 'bg-[--color-header-bg-blue] text-[--color-header-font]',
    green: 'bg-[--color-header-bg-green] text-[--color-header-font]',
    beige: 'bg-[--color-header-bg-beige] text-[--color-header-font-dark]'
  }

  return variants[props.widget.selectedColor]
})
</script>

<template>
  <div class="gs-product-widget flex flex-col gap-[10px] h-[66px] w-full">
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
</template>
