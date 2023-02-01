import React from 'react';
import Amount from '../Amount';

import { Container, ContainerInfo, ContainerContent, ContainerImage, Image, StimulusImage, Title, ContainerPrice, PriceCurrency, PriceCents } from './styles';

const CardHorz: React.FC = ({ data: { id, title, img, stimulusImg, stimulus, oldPrice, memberPrice, nonMemberPrice } }) => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerImage>
          <Image source={img} />
          <StimulusImage source={stimulusImg} />
        </ContainerImage>

        <ContainerContent>
          <Title>{title}</Title>

          <ContainerPrice>
            <PriceCurrency>R$</PriceCurrency> 30,<PriceCents>00</PriceCents>
          </ContainerPrice>

          <Amount />
        </ContainerContent>
      </ContainerInfo>
    </Container>
  );
};

export default CardHorz;
