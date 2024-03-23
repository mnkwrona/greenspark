import { defineComponent } from 'vue';
import GSTooltip from '../components/GSTooltip.vue'

export default {
  title: 'Components/GSTooltip',
  component: GSTooltip,
}

const Template = (args) => defineComponent({
  components: { GSTooltip },
  setup() {
    return { args }
  },
  template: `
    <div style="position: relative; margin-left: 200px; top: 200px;">
      <GSTooltip v-bind="args">
        <template #trigger>
          <button style="border-radius: 4px; color: white; background-color: #3b755f; padding: 4px 8px">
            <b>Show</b>
          </button>
        </template>
        <template #content>
          <div>Hello! I'm the tooltip content.</div>
        </template>
      </GSTooltip>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}
