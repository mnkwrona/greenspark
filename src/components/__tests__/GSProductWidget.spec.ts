import { describe, it, expect } from 'vitest'
import { mount, flushPromises, shallowMount } from '@vue/test-utils'
import GSProductWidget from '../GSProductWidget.vue'
import GSLogo from '../icons/GSLogo.vue'
import GSSkeleton from '../GSSkeleton.vue'

describe('GSProductWidget.vue', () => {
  const widget = {
    amount: 10,
    type: 'carbon',
    action: 'reduces',
    linked: true,
    active: true,
    selectedColor: 'blue'
  }

  it('renders subheader and header correctly', () => {
    const wrapper = shallowMount(GSProductWidget, {
      props: {
        widget
      }
    })

    expect(wrapper.find('.text-xs').text()).toBe('this product reduces')
    expect(wrapper.find('.font-bold').text()).toBe('10kgs of carbon')
  })

  it('renders logo color correctly based on selected color', async () => {
    const wrapper = mount(GSProductWidget, {
      props: {
        widget
      }
    })

    await flushPromises()

    const logo = wrapper.findComponent(GSLogo)
    expect(logo.props('color')).toBe('white')
  })

  it('renders skeleton if widget data is not provided', async () => {
    const wrapper = shallowMount(GSProductWidget, {
      props: {
        widget: null
      }
    })

    await flushPromises()

    const skeleton = wrapper.findComponent(GSSkeleton)
    expect(skeleton.exists()).toBe(true)
  })
})
