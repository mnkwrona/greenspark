import { defineComponent } from 'vue';
import GSColorSelect from '../components/GSColorSelect.vue';

export default {
  title: 'Components/GSColorSelect',
  component: GSColorSelect,
  tags: ['autodocs'],
};

const Template = (args) => defineComponent({
  components: { GSColorSelect },
  setup() {
    return { args };
  },
  template: '<GSColorSelect v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  options: ['black', 'blue','white', 'green', 'beige']
};


export const WhiteSelected = Template.bind({});
WhiteSelected.args = {
  modelValue: 'white',
  options: ['black', 'blue','white', 'green', 'beige']
};
