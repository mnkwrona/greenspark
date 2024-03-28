import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import GSCheckbox from '../GSCheckbox.vue'

describe('Checkbox.vue', () => {
  it('renders unchecked checkbox when modelValue is false', () => {
    const wrapper = shallowMount(GSCheckbox, {
      props: {
        modelValue: false
      }
    })
    expect(wrapper.find('img[src="../assets/IconCheckboxUnchecked.svg"]').exists()).toBe(true)
  })

  it('renders checked checkbox when modelValue is true', () => {
    const wrapper = shallowMount(GSCheckbox, {
      props: {
        modelValue: true
      }
    })
    expect(wrapper.find('img[src="../assets/IconCheckboxChecked.svg"]').exists()).toBe(true)
  })

  it('emits update:modelValue event on unchecked checkbox click', async () => {
    const wrapper = shallowMount(GSCheckbox, {
      props: {
        modelValue: false
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })
})
