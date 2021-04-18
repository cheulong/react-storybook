import React from 'react';
import Navigation from './Navigation';

const Template = (args) => <Navigation {...args} />;

export const basicNavigation = Template.bind({});

export default {
  component: Navigation,
  title: 'Molecules/Navigation',
  argTypes: {
    direction: {
      defaultValue: 'horizontal',
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    items: {
      control: 'array',
      defaultValue: [
        { title: 'home', url: '/home', icon: 'plus' },
        { title: 'home', url: '/home', icon: 'plus' },
        { title: 'home', url: '/home', icon: 'plus' },
      ],
    },
  },
};
