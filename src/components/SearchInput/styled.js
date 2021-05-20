import styled from 'styled-components';

export const SearchField = styled.label`
  /* width: fit-content; */
  /* border: 1px solid green; */
  margin: 2em auto;
  padding: 16px 5px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.elements};
  width: 345px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.input};

  svg {
    margin: 0 20px;
    font-size: 1.5em;
  }

  input {
    width: initial;
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;

    &::-webkit-input-placeholder {
      color: inherit;
      /* color: steelblue; */
    }
  }
`;
