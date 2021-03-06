import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton  from '../MyButton/MyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const GreenBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GreenBtn.args = {
  color: "",
  title: "ClickMe!"

};

export const PinkBtn = Template.bind({});
PinkBtn.args = {
  color: '',
  title: "Hello!"
};
