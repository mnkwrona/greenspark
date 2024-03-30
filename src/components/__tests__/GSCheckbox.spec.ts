import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GSCheckbox from '../GSCheckbox.vue'

describe('Checkbox.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(GSCheckbox, {
      slots: {
        label: 'Test Label',
        control: '<input type="text" />'
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders unchecked checkbox when modelValue is false', () => {
    const wrapper = mount(GSCheckbox, {
      props: {
        modelValue: false
      }
    })
    expect(wrapper.find('img[src="/src/assets/IconCheckboxUnchecked.svg"]').exists()).toBe(true)
  })

  it('renders checked checkbox when modelValue is true', () => {
    const wrapper = mount(GSCheckbox, {
      props: {
        modelValue: true
      }
    })
    expect(wrapper.find('img[src="/src/assets/IconCheckboxChecked.svg"]').exists()).toBe(true)
  })

  it('emits update:modelValue event on unchecked checkbox click', async () => {
    const wrapper = mount(GSCheckbox, {
      props: {
        modelValue: false
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })
})
