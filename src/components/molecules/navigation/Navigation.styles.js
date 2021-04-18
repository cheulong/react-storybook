import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: ${(props) =>
    props.direction !== 'horizontal' ? `column` : undefined};
  padding: 16px;
  a + a {
    margin-left: ${(props) =>
      props.direction === 'horizontal' ? `24px` : undefined};
    margin-top: ${(props) =>
      props.direction !== 'horizontal' ? `24px` : undefined};
  }
  .button__icon {
    color: black;
    margin-right: 4px;
    flex-direction: row;
    display: flex;
  }
`;
