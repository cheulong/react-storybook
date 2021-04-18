import React from 'react';
import { StyledButton, StyledLinkedButton } from './Button.styles';
import { ButtonIcon } from './ButtonIcon';

const Button = ({
  label,
  href,
  onClick,
  icon,
  backgroundColor,
  variant = 'primary',
  ...props
}) => {
  if (!href)
    return (
      <StyledButton
        style={backgroundColor && { backgroundColor }}
        variant={variant}
        onClick={onClick}
        {...props}
      >
        {icon && <ButtonIcon name={icon} />}
        {label}
      </StyledButton>
    );
  return (
    <StyledLinkedButton variant={variant} href={href}>
      {icon && <ButtonIcon name={icon} />} {label}
    </StyledLinkedButton>
  );
};

export default Button;
