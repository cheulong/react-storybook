import React from 'react';
import Button from './Button';
import { withDesign } from 'storybook-addon-designs';

const buttonClicked = (e) => {
  e.preventDefault();
  alert('Hello');
};

const Template = (args) => <Button {...args} />;

export const basicButton = Template.bind({});
basicButton.args = {
  variant: 'primary',
  label: 'Basic button',
  icon: 'plus',
};
basicButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
};
export const functionButton = Template.bind({});
functionButton.args = {
  variant: 'secondary',
  label: 'Function button',
  icon: 'user',
  onClick: buttonClicked,
};

export const linkedButton = Template.bind({});
linkedButton.args = {
  variant: 'primary',
  label: 'Basic button',
  icon: 'plus',
  href: '/route',
};

export default {
  component: Button,
  title: 'Button',
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['plus', 'x'],
      },
    },
  },
};
