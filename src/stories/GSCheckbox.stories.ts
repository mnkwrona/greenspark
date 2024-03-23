import { defineComponent } from 'vue';
import GSCheckbox from '../components/GSCheckbox.vue';

export default {
  title: 'Components/GSCheckbox',
  component: GSCheckbox,
  tags: ['autodocs'],
};

const Template = (args) => defineComponent({
  components: { GSCheckbox },
  setup() {
    return { args };
  },
  template: '<div style="display: flex"><GSCheckbox v-bind="args" /></div>',
});

export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  modelValue: false,
};
