import { defineComponent } from 'vue';
import GSLogo from '../components/GSLogo.vue';

export default {
  title: 'Components/GSLogo',
  component: GSLogo,
  tags: ['autodocs'],
};


const Template = (args) => defineComponent({
  components: { GSLogo },
  setup() {
    return { args };
  },
  template: '<GSLogo v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
  color: '',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};
