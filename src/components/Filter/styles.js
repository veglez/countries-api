import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  /* height: 250px; */
  margin: 1em;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 21px;
  background-color: ${({ theme }) => theme.elements};
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.09);
  color: inherit;
  font-weight: var(--Weight1);
  font-size: var(--Homepage-Items);
  font-family: var(--Family);
`;

export const List = styled.ul`
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.09);
  list-style: none;
  background-color: ${({ theme }) => theme.elements};
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 110%;
  width: 100%;
  z-index: 10;
`;

export const ListItem = styled.li`
  padding: 8px 16px;
  /* display: inline-block; */
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &:first-child {
    padding: 16px 0 8px 16px;
  }
  &:focus {
    background-color: initial;
  }
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(0, 0, 0, 0.45)' : 'initial'};
`;
