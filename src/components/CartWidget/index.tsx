import React, { useEffect, useContext } from 'react';

import { CartContext } from "./../../contexts/cart";

import { Container, CartImage, CartBudget, CartBudgetText } from './styles';

const cartImg = require('../../assets/images/cart.png')

const CartWidget: React.FC = (props) => {
  const { totalUnits } = useContext(CartContext)

  return (
    <Container style={props.styles}>
      <CartImage source={cartImg} />

      <CartBudget>
        <CartBudgetText>{totalUnits}</CartBudgetText>
      </CartBudget>
    </Container>
  );
};

export default CartWidget;
