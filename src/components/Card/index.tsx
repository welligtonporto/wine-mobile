import React, { useContext } from 'react';

import { CartContext } from "./../../contexts/cart";

import { Container, ContainerInfo, ContainerImage, Image, StimulusImage, ContainerStimulus, Title, OldPrice, Stimulus, ContainerMemberPrice, ContainerPrice, PriceCurrency, PriceCents, MemberLabel, NonMemberPrice } from './styles';

import Button from '../Button';

const Card: React.FC = ({ data: { id, title, img, stimulusImg, stimulus, oldPrice, memberPrice, nonMemberPrice } }) => {
  const { addToCart } = useContext(CartContext)

  async function handleAdd(productId){
    // const jsonValue = JSON.stringify({
    //   totalUnits: 99,
    //   items: [
    //     {
    //       id: "123",
    //       units: 10
    //     },
    //     {
    //       id: "456",
    //       units: 90
    //     }
    //   ]
    // })
    // await AsyncStorage.setItem('@storage_Key', jsonValue);

    addToCart(productId)
  }

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

      <Button onPress={() => handleAdd(id)}>Adicionar</Button>
    </Container>
  );
};

export default Card;
