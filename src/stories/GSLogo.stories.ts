import type { Meta, StoryObj } from '@storybook/vue3';
import GSLogo from '../components/GSLogo.vue';

const meta = {
  title: 'Components/GSLogo',
  component: GSLogo,

  render: (args: any) => ({
    components: { GSLogo },
    setup() {
      return { args };
    },
    template: '<GSLogo :color="args.color" />',
  }),
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['beige', 'green', 'blue', 'black'] },
  },
  args: {
    color: 'blue',
  }
} satisfies Meta<typeof GSLogo>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: null,
  }
}

export const Green: Story = {
  args: {
    color: 'green',
  }
}
