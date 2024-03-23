import { defineComponent } from 'vue';
import GSToggle from '../components/GSToggle.vue'

export default {
  title: 'Components/GSToggle',
  component: GSToggle,
  tags: ['autodocs'],
}

const Template = (args) => defineComponent({
  components: { GSToggle },
  setup() {
    return { args }
  },
  template: '<GSToggle v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  modelValue: false,
}

export const Toggled = Template.bind({})
Toggled.args = {
  modelValue: true,
}
