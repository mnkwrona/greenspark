import { defineComponent } from 'vue';
import GSWidgetProp from '../components/GSWidgetProp.vue'
import GSToggle from '../components/GSToggle.vue'

export default {
  title: 'Components/GSWidgetProp',
  component: GSWidgetProp,
}

const Template = (args) => defineComponent({
  components: { GSWidgetProp, GSToggle },
  setup() {
    return { args }
  },
  template: `
    <div style="max-width: 300px;">
      <GSWidgetProp v-bind="args">
        <template #label>
          <p style="color: var(--color-prop-label);">Property Label</p>
        </template>
        <template #control>
          <GSToggle modelValue='false' />
        </template>
      </GSWidgetProp>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}
