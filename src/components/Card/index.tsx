import React, { useContext } from 'react';

import { CartContext } from "./../../contexts/cart";

import { Container, ContainerTexts, ContainerInfo, ContainerImage, Image, StimulusImage, ContainerStimulus, Title, OldPrice, Stimulus, ContainerMemberPrice, ContainerPrice, PriceCurrency, PriceCents, MemberLabel, NonMemberPrice } from './styles';

import Button from '../Button';

interface CardProps {
  data: any;
}

const Card: React.FC<CardProps> = ({ data: { id, title, img, stimulusImg, stimulus, oldPrice, nonMemberPrice } }) => {
  const { addToCart } = useContext(CartContext)

  async function handleAdd(productId: number){
    addToCart(productId)
  }

  return (
    <Container>
      <ContainerInfo>
        <ContainerImage>
          <Image source={{ uri: img }} />
          <StimulusImage source={stimulusImg} />
        </ContainerImage>

        <ContainerTexts>
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
              <PriceCurrency>R$</PriceCurrency> 39,<PriceCents>90</PriceCents>
            </ContainerPrice>
          </ContainerMemberPrice>
        
          <NonMemberPrice>NÃO SÓCIO {nonMemberPrice.formatted}</NonMemberPrice>
        </ContainerTexts>
      </ContainerInfo>

      <Button variation="default" onPress={() => handleAdd(id)}>Adicionar</Button>
    </Container>
  );
};

export default Card;
