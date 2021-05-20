import styled from 'styled-components';
import { IoMdMoon } from 'react-icons/io';

export const MoonIcon = styled(IoMdMoon)`
  font-size: 16px;
  ${({ $isDark }) =>
    $isDark
      ? `fill: white;
    stroke-width: 4;
    `
      : `fill: white;
    stroke-width: 40;
    stroke-color: black;
  `}
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: inherit;
`;
