import styled from 'styled-components';

const PRIMARY_COLOR = '#7fffd4';
const SECONDARY_COLOR = '#6495ED';
const LINKED_COLOR = '#7fffd4';

export const StyledButton = styled.button`
  background-color: ${(props) => buttonBackground(props)};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledLinkedButton = styled(StyledButton).attrs({ as: 'a' })`
  background-color: ${LINKED_COLOR};
`;

const buttonBackground = (props) => {
  if (!props.variant) return PRIMARY_COLOR;
  let color;
  switch (props.variant) {
    case 'primary':
      color = PRIMARY_COLOR;
      break;
    case 'secondary':
      color = SECONDARY_COLOR;
      break;
    default:
      color = PRIMARY_COLOR;
      break;
  }
  return color;
};
