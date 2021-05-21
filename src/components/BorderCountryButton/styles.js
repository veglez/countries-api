import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Button = styled(Link)`
  border: none;
  outline: none;
  /* border: 1px solid steelblue; */
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  padding: 4px 24px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  ${({ theme }) => css`
    color: ${theme.text};
    background-color: ${theme.elements};
  `}
`;
