import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.5rem;
  padding: 0 15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;

export const BaseButtons = styled.button`
  padding: 0.6rem;
  line-height: 0;
  border: none;
  border-radius: 6px;
`;

export const ButtonLocation = styled(BaseButtons)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  color: ${(props) => props.theme.colors.purpleDark};
  background-color: ${(props) => props.theme.colors.purpleLight};
`;

export const ButtonShoppingCart = styled(BaseButtons)`
  color: ${(props) => props.theme.colors.yellowDark};
  background-color: ${(props) => props.theme.colors.yellowLight};
`;
