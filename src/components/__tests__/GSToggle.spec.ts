import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import GSToggle from '../GSToggle.vue'

describe('GSToggle.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(GSToggle)

    expect(wrapper.exists()).toBe(true)
  })

  it('renders toggled when modelValue is true', () => {
    const wrapper = mount(GSToggle, {
      props: {
        modelValue: true
      }
    })

    expect(wrapper.find('button').classes()).toContain('bg-[--color-toggle-fill-selected]')
    expect(wrapper.find('.ring-outer').classes()).toContain('translate-x-[25%]')
  })

  it('renders untoggled when modelValue is false', () => {
    const wrapper = mount(GSToggle, {
      props: {
        modelValue: false
      }
    })

    expect(wrapper.find('button').classes()).toContain('bg-[--color-toggle-fill]')
    expect(wrapper.find('.ring-outer').classes()).not.toContain('translate-x-[25%]')
  })

  it('emits update:modelValue event on untoggled toggle click', async () => {
    const wrapper = mount(GSToggle, {
      props: {
        modelValue: false
      }
    })
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })
})
