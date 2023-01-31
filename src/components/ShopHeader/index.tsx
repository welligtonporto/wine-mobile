import React from 'react';

import { Container, Logo, TestCart } from './styles';
const logoImg = require('../../assets/images/logo.png')

import CartWidget from '../CartWidget';

const ShopHeader: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />

      <CartWidget styles={{ marginBottom: -25 }} />
    </Container>
  );
};

export default ShopHeader;
