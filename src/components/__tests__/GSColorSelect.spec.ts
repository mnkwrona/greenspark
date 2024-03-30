import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GSColorSelect from '../GSColorSelect.vue'

import type { Color } from '../../types/Color'

describe('GSColorSelect.vue', () => {
  const options: Color[] = ['white', 'black', 'blue', 'green', 'beige']
  const modelValue = 'blue'
  const disabled = false

  it('renders correctly', () => {
    const wrapper = mount(GSColorSelect, {
      slots: {
        label: 'Test Label',
        control: '<input type="text" />'
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders color options correctly', () => {
    const wrapper = mount(GSColorSelect, {
      props: {
        modelValue,
        options,
        disabled
      }
    })

    const colorOptionElements = wrapper.findAll('.gs-color-select > div')
    expect(colorOptionElements).toHaveLength(options.length)

    options.forEach((option, index) => {
      const colorOptionElement = colorOptionElements[index]
      expect(colorOptionElement.classes()).toContain(`bg-[--color-select-${option}]`)
    })
  })

  it('selects color option on click if not disabled', async () => {
    const wrapper = mount(GSColorSelect, {
      props: {
        modelValue,
        options,
        disabled
      }
    })

    const colorOptionElements = wrapper.findAll('.gs-color-select > div')
    await colorOptionElements[0].trigger('click')

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['white'])
  })

  it('does not select color option on click if disabled', async () => {
    const wrapper = mount(GSColorSelect, {
      props: {
        modelValue,
        options,
        disabled: true
      }
    })

    const colorOptionElements = wrapper.findAll('.gs-color-select > div')
    await colorOptionElements[0].trigger('click')

    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()
  })

  it('disables color options if disabled prop is true', () => {
    const wrapper = mount(GSColorSelect, {
      props: {
        modelValue,
        options,
        disabled: true
      }
    })

    const colorOptionWrapper = wrapper.find('.gs-color-select')
    expect(colorOptionWrapper.classes()).toContain('cursor-not-allowed')
  })
})
