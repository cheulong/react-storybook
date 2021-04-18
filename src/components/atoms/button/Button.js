import React from 'react';
import { StyledButton, StyledLinkedButton } from './Button.styles';
import { ButtonIcon } from './ButtonIcon';

const Button = ({ children, href, onClick, icon, variant = 'primary' }) => {
  if (!href)
    return (
      <StyledButton variant={variant} onClick={onClick}>
        {icon && <ButtonIcon name={icon} />}
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkedButton variant={variant} href={href}>
      {icon && <ButtonIcon name={icon} />} {children}
    </StyledLinkedButton>
  );
};

export default Button;
