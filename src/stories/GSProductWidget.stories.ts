import type { Meta, StoryObj } from '@storybook/vue3';
import type Widget from '@/types/Widget';
import GSProductWidget from '../components/GSProductWidget.vue';

const widgetSample = {
  id: 1,
  action: 'action',
  amount: 100,
  type: 'type',
  linked: true,
  selectedColor: 'blue',
  active: true
}

const meta = {
  title: 'Components/GSProductWidget',
  component: GSProductWidget,

  render: (args: any) => ({
    components: { GSProductWidget },
    setup() {
      return { args };
    },
    template: '<GSProductWidget :widget=args.widget style="max-width: 220px;" />',
  }),
  tags: ['autodocs'],
  argTypes: {
    widget: { control: 'select', options: [widgetSample, null]},
  },
  args: {
    widget: widgetSample,
  }
} satisfies Meta<typeof GSProductWidget>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    widget: widgetSample,
  }
}

export const Loading: Story = {
  args: {
    widget: null,
  }
}
