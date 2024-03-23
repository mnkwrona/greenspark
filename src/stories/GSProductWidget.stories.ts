import { defineComponent } from 'vue';
import GSProductWidget from '../components/GSProductWidget.vue';

export default {
  title: 'Components/GSProductWidget',
  component: GSProductWidget,
  tags: ['autodocs'],
};

const Template = (args) => defineComponent({
  components: { GSProductWidget },
  setup() {
    return { args }
  },
  template: '<GSProductWidget v-bind="args" style="max-width: 220px; padding-top: 100px;" />',
})

export const Default = Template.bind({})
Default.args = {
  widget: {
    action: 'action',
    amount: 100,
    type: 'type',
    linked: true,
    selectedColor: 'blue',
    active: true,
  },
}

export const Loading = Template.bind({})
Loading.args = {
  widget: null,
}
