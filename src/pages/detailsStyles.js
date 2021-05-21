import styled from 'styled-components';
export const Container = styled.div`
  /* border: 1px solid steelblue; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: baseline;
  width: 90%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 80px auto 0;
  font-size: var(--Detail-Page);
`;

export const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  img {
    height: 300px;
    max-width: 450px;
    width: 100%;

    @media screen and (min-width: 1440px) {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  width: 100%;
  max-width: 600px;

  h3 {
    font-size: 2em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  /* justify-content: space-around; */
  margin: 24px 0;
  width: 100%;

  ul {
    line-height: 2em;
  }

  span {
    font-weight: var(--Weight2);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: baseline;

  & div {
    flex-wrap: wrap;
    display: flex;
    gap: 8px;
  }

  & > p {
    font-weight: var(--Weight2);
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
