import type { Meta, StoryObj } from '@storybook/vue3';
import GSToggle from '../components/GSToggle.vue'

const meta = {
  title: 'Components/GSToggle',
  component: GSToggle,
  render: (args: any) => ({
    components: { GSToggle },
    setup() {
      return { args };
    },
    template: '<div style="display: flex"><GSToggle :modelValue="args.modelValue" /></div>',
  }),
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean'},
  },
  args: {
    modelValue: true,
  }
} satisfies Meta<typeof GSToggle>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
  }
}

export const Toggled: Story = {
  args: {
    modelValue: true,
  }
}
