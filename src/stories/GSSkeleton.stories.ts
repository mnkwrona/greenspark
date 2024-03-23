import { defineComponent } from 'vue';
import GSSkeleton from '../components/GSSkeleton.vue';

export default {
  title: 'Components/GSSkeleton',
  component: GSSkeleton,
  tags: ['autodocs'],
};

const Template = (args) => defineComponent({
  components: { GSSkeleton },
  setup() {
    return { args };
  },
  template: '<GSSkeleton v-bind="args" style="height: 100px; width: 200px;" />',
});

export const Default = Template.bind({});
Default.args = {
  color: '',
};
