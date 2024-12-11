import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 6rem 15rem;

  @media (max-width: 1400px) {
    padding: 0 10rem;
  }

  @media (max-width: 1020px) {
    padding: 0 5rem;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const InfosContainer = styled.main`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 500px;

  .info {
    width: 60%;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.275rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`;

export const InfoIconsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  div {
    display: flex;
    justify-content: baseline;
    align-items: center;

    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`;

// interface ColorProps {}

export const BoxIcon = styled.span`
  background-color: ${(props) => props.theme.colors.yellowDark};
  color: white;
  line-height: 0;
  border-radius: 50%;
  padding: 0.5rem;
`;
