import React from 'react';
import { StyledNavigation } from './Navigation.styles';
import { NavigationIcon } from './NavigationIcon';

const Navigation = ({ direction, items }) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item) => (
        <a href={item.url}>
          {item.icon ? (
            <NavigationIcon name={item.icon} title={item.title} />
          ) : (
            item.title
          )}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
