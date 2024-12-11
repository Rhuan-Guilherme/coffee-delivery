import { MapPin, ShoppingCart } from 'phosphor-react';
import {
  ButtonLocation,
  ButtonsContainer,
  ButtonShoppingCart,
  HeaderContainer,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src="./logo.svg" alt="" />

      <ButtonsContainer>
        <ButtonLocation>
          <MapPin weight="fill" size={22} />
          <span>Brasília - DF</span>
        </ButtonLocation>
        <ButtonShoppingCart>
          <ShoppingCart weight="fill" size={22} />
        </ButtonShoppingCart>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
