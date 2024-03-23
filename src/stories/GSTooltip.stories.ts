import type { Meta, StoryObj } from '@storybook/vue3';
import GSTooltip from '../components/GSTooltip.vue'

const meta = {
  title: 'Components/GSTooltip',
  component: GSTooltip,
  render: (args: any) => ({
    components: { GSTooltip },
    setup() {
      return { args };
    },
    template: `
    <div style="position: relative; margin-left: 200px; top: 50px;">
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
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof GSTooltip>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
