import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import GSProductWidgetsManager from '../GSProductWidgetsManager.vue'

const widgetsSample = [
  {
    amount: 50,
    type: 'carbon',
    action: 'offsets',
    linked: true,
    active: true,
    selectedColor: 'blue'
  },
  {
    amount: 100,
    type: 'plastic bottles',
    action: 'collects',
    linked: true,
    active: false,
    selectedColor: 'true'
  },
  {
    amount: 10,
    type: 'trees',
    action: 'plants',
    linked: true,
    active: true,
    selectedColor: 'blue'
  }
]

describe('ProductWidgetsManager.vue', () => {
  it('displays skeleton if no widgets provided', () => {
    const wrapper = shallowMount(GSProductWidgetsManager, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          GSSkeleton: { template: '<div class="gs-skeleton" />' }
        }
      }
    })
    expect(wrapper?.find('.gs-skeleton').exists()).toBeTruthy()
  })

  it('displays widgets if their data is provided', () => {
    const pinia = createTestingPinia()
    pinia.state.value['widget'] = {
      widgets: widgetsSample
    }

    const wrapper = shallowMount(GSProductWidgetsManager, {
      global: {
        plugins: [pinia],
        stubs: {
          GSProductWidget: { template: '<div class="gs-product-widget" />' }
        }
      }
    })

    expect(wrapper?.findAll('.gs-product-widget')).toHaveLength(3)
  })
})
