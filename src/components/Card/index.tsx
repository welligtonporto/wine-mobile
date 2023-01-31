import React from 'react';

import { Container, ContainerInfo, ContainerImage, Image, StimulusImage, ContainerStimulus, Title, OldPrice, Stimulus, ContainerMemberPrice, ContainerPrice, PriceCurrency, PriceCents, MemberLabel, NonMemberPrice } from './styles';

import Button from '../Button';

const Card: React.FC = ({ data: { title, img, stimulusImg, stimulus, oldPrice, memberPrice, nonMemberPrice } }) => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerImage>
          <Image source={img} />
          <StimulusImage source={stimulusImg} />
        </ContainerImage>

        <Title>{title}</Title>

        <ContainerStimulus>
          <OldPrice>{oldPrice.formatted}</OldPrice>
          <Stimulus>{stimulus}</Stimulus>
        </ContainerStimulus>

        <ContainerMemberPrice>
          <MemberLabel>
            SÓCIO{'\n'}
            WINE
          </MemberLabel>

          <ContainerPrice>
            <PriceCurrency>R$</PriceCurrency> 30,<PriceCents>00</PriceCents>
          </ContainerPrice>
        </ContainerMemberPrice>
        
        <NonMemberPrice>NÃO SÓCIO {nonMemberPrice.formatted}</NonMemberPrice>
      </ContainerInfo>

      <Button onPress={() => console.log("Testing")}>Adicionar</Button>
    </Container>
  );
};

export default Card;
