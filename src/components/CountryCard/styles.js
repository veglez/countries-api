import styled from 'styled-components';

export const Card = styled.article`
  /* border: 1px solid steelblue; */
  border-radius: 8px;
  max-width: 250px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
  }

  div.card__body {
    padding: 1.5em 2em 3em;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      padding: 0 0 0.5em 0;
    }

    span {
      font-weight: var(--Weight2);
    }
  }
`;
