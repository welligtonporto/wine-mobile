import React, { useContext } from 'react';
import Amount from '../Amount';

import { CartContext } from "./../../contexts/cart";

import { Container, ContainerInfo, ContainerContent, ContainerImage, Image, StimulusImage, Title, ContainerPrice, PriceCurrency, PriceCents } from './styles';

interface CardHorzProps {
  data: any;
}

const CardHorz: React.FC<CardHorzProps> = ({ data: { id, title, img, stimulusImg, units } }) => {
  const { changeUnits } = useContext(CartContext)
  
  function handleChangeUnits(newUnits: number){
    changeUnits(id, newUnits);
  }
  
  return (
    <Container>
      <ContainerInfo>
        <ContainerImage>
          <Image source={{ uri: img }} />
          <StimulusImage source={stimulusImg} />
        </ContainerImage>

        <ContainerContent>
          <Title>{title}</Title>

          <ContainerPrice>
            <PriceCurrency>R$</PriceCurrency> 30,<PriceCents>00</PriceCents>
          </ContainerPrice>

          <Amount units={units} handleChange={handleChangeUnits} />
        </ContainerContent>
      </ContainerInfo>
    </Container>
  );
};

export default CardHorz;
