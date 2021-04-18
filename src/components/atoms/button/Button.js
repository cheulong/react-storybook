import React from 'react';
import { StyledButton, StyledLinkedButton } from './Button.styles';

const Button = ({ children, href, onClick, variant = 'primary' }) => {
  if (!href)
    return (
      <StyledButton variant={variant} onClick={onClick}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkedButton variant={variant} href={href}>
      {children}
    </StyledLinkedButton>
  );
};

export default Button;
