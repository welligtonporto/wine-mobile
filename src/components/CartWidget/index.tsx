import React from 'react';
import { Container, CartImage, CartBudget, CartBudgetText } from './styles';
const cartImg = require('../../assets/images/cart.png')

const CartWidget: React.FC = (props) => {
  return (
    <Container style={props.styles}>
      <CartImage source={cartImg} />

      <CartBudget>
        <CartBudgetText>0</CartBudgetText>
      </CartBudget>
    </Container>
  );
};

export default CartWidget;
