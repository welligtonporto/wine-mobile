import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, BackButton, BackImage } from './styles';
const logoImg = require('../../assets/images/logo.png');
const backImg = require('../../assets/images/back.png');

import CartWidget from '../CartWidget';

interface ShopHeaderProps {
  variation: string;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ variation }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {variation === "canBack" ? (
        <BackButton onPress={() => navigation.goBack()}>
          <BackImage source={backImg} />
        </BackButton>
      ) : (
        <Logo source={logoImg} />
      )}

      <CartWidget styles={{ marginBottom: -25 }} />
    </Container>
  );
};

export default ShopHeader;
