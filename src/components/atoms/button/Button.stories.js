import React from 'react';
import Button from './Button';

const buttonClicked = (e) => {
  e.preventDefault();
  alert('Hello');
};

export const basicButton = () => <Button>Basic button</Button>;
export const secondaryButton = () => (
  <Button variant='secondary'>Basic button</Button>
);
export const thirdButton = () => <Button variant='third'>Basic button</Button>;
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href='/route'>Linked button</Button>;

export default {
  component: Button,
  title: 'Button',
};
