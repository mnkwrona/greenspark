import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GSSkeleton from '../GSSkeleton.vue'

describe('GSSkeleton.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(GSSkeleton)

    expect(wrapper.exists()).toBe(true)
  })

  it('renders with correct styles', () => {
    const wrapper = mount(GSSkeleton)

    expect(wrapper.classes()).toContain('bg-gray-300')
    expect(wrapper.classes()).toContain('animate-pulse')
  })

  it('renders a span element with "Loading..." text', () => {
    const wrapper = mount(GSSkeleton)

    const span = wrapper.find('span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('Loading...')
  })
})
