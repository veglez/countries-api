import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.elements};
  h1 {
    font-size: 1em;
    font-weight: var(--Weight3);
  }
`;
