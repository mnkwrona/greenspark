import type { Meta, StoryObj } from '@storybook/vue3';
import GSCheckbox from '../components/GSCheckbox.vue';

const meta = {
  title: 'Components/GSCheckbox',
  component: GSCheckbox,
  render: (args: any) => ({
    components: { GSCheckbox },
    setup() {
      return { args };
    },
    template: '<div style="display: flex"><GSCheckbox :modelValue="args.modelValue" /></div>',
  }),
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean'},
  },
  args: {
    modelValue: true,
  }
} satisfies Meta<typeof GSCheckbox>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
  }
}

export const Checked: Story = {
  args: {
    modelValue: true,
  }
}
