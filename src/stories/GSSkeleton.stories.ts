import type { Meta, StoryObj } from '@storybook/vue3';
import GSSkeleton from '../components/GSSkeleton.vue';


const meta = {
  title: 'Components/GSSkeleton',
  component: GSSkeleton,
  render: (args: any) => ({
    components: { GSSkeleton },
    setup() {
      return { args };
    },
    template: '<GSSkeleton v-bind="args" style="height: 100px; width: 200px;" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof GSSkeleton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}
