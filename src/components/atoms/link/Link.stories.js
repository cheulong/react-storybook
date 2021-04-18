import React from 'react';
import Link from './Link';

const Template = (args) => <Link {...args} />;

export const basicLink = Template.bind({});
basicLink.args = {
  label: 'Basic Link',
};

export default {
  component: Link,
  title: 'Atoms/Link',
};
