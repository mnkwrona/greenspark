import type { Meta, StoryObj } from '@storybook/vue3';
import GSWidgetProp from '../components/GSWidgetProp.vue'
import GSToggle from '../components/GSToggle.vue'

const meta = {
  title: 'Components/GSWidgetProp',
  component: GSWidgetProp,
  render: (args: any) => ({
    components: { GSWidgetProp, GSToggle },
    setup() {
      return { args };
    },
    template: `
    <div style="max-width: 300px;">
      <GSWidgetProp >
        <template #label>
          <p style="color: var(--color-prop-label);">Property Label</p>
        </template>
        <template #control>
          <GSToggle :modelValue="true" />
        </template>
      </GSWidgetProp>
    </div>
  `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof GSWidgetProp>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
