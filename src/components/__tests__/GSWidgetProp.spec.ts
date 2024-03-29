import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GSWidgetProp from '../GSWidgetProp.vue'

describe('GSWidgetProp.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(GSWidgetProp, {
      slots: {
        label: 'Test Label',
        control: '<input type="text" />'
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders label slot correctly', () => {
    const wrapper = mount(GSWidgetProp, {
      slots: {
        label: 'Test Label',
        control: '<input type="text" />'
      }
    })

    expect(wrapper.text()).toContain('Test Label')
  })

  it('renders control slot correctly', () => {
    const wrapper = mount(GSWidgetProp, {
      slots: {
        label: 'Test Label',
        control: '<input type="text" />'
      }
    })

    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
  })
})
