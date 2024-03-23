import type { Meta, StoryObj } from '@storybook/vue3';
import GSColorSelect from '../components/GSColorSelect.vue';

const meta = {
  title: 'Components/GSColorSelect',
  component: GSColorSelect,

  render: (args: any) => ({
    components: { GSColorSelect },
    setup() {
      return { args };
    },
    template: '<div style="display: flex"><GSColorSelect :modelValue="args.modelValue" :options="args.options" /></div>',
  }),
  tags: ['autodocs'],
  argTypes: {
    modelValue: {control: 'select', options: ['black', 'blue','white', 'green', 'beige']}
  },
  args: {
    modelValue: 'white',
    options: ['black', 'blue','white', 'green', 'beige']
  }
} satisfies Meta<typeof GSColorSelect>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '',
    options: ['black', 'blue','white', 'green', 'beige']
  }
}

export const WhiteSelected: Story = {
  args: {
    modelValue: 'white',
    options: ['black', 'blue','white', 'green', 'beige']
  }
}
