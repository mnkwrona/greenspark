import {ref} from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3';
import type Widget from '@/types/Widget';
import GSProductWidget from '../components/GSProductWidget.vue';

const widgetSample: Widget = {
  id: 1,
  action: 'collects',
  amount: 100,
  type: 'plastic bottles',
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
