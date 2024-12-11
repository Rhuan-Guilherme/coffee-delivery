import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  BoxIcon,
  HomeContainer,
  InfoIconsContainer,
  InfosContainer,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <InfosContainer>
        <div className="info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>

          <InfoIconsContainer>
            <div>
              <BoxIcon>
                <ShoppingCart weight="fill" size={16} />
              </BoxIcon>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <BoxIcon>
                <Package weight="fill" size={16} />
              </BoxIcon>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <BoxIcon>
                <Timer weight="fill" size={16} />
              </BoxIcon>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <BoxIcon>
                <Coffee weight="fill" size={16} />
              </BoxIcon>
              <p>O café chega fresquinho até você</p>
            </div>
          </InfoIconsContainer>
        </div>

        <div>
          <img src="./cafeLogo.svg" alt="" />
        </div>
      </InfosContainer>
    </HomeContainer>
  );
}
