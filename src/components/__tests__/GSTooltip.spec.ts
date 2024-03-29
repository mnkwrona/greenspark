import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GSTooltip from '../GSTooltip.vue'

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

describe('GSTooltip.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(GSTooltip)

    expect(wrapper.exists()).toBe(true)
  })

  it('shows tooltip on mouseover', async () => {
    const wrapper = mount(GSTooltip, {
      slots: {
        trigger: '<div id="trigger">Hover here</div>',
        content: '<div id="content">Tooltip content</div>'
      }
    })

    await wrapper.find('button').trigger('mouseover')
    expect(wrapper.find('.tooltip').isVisible()).toBe(true)
  })

  it('hides tooltip on mouseleave', async () => {
    const wrapper = mount(GSTooltip, {
      slots: {
        trigger: '<div id="trigger">Hover here</div>',
        content: '<div id="content">Tooltip content</div>'
      }
    })

    await wrapper.find('button').trigger('mouseover')
    expect(wrapper.find('.tooltip').exists()).toBe(true)

    await wrapper.find('button').trigger('mouseleave')
    await sleep(400)
    expect(wrapper.find('.tooltip').isVisible()).toBe(false)
  })

  it('displays correct content in tooltip', async () => {
    const wrapper = mount(GSTooltip, {
      slots: {
        trigger: '<div id="trigger">Hover here</div>',
        content: '<div id="content">Tooltip content</div>'
      }
    })

    await wrapper.find('button').trigger('mouseover')
    expect(wrapper.find('#content').text()).toBe('Tooltip content')
  })
})
