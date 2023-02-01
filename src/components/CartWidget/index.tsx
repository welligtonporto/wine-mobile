import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CartContext } from "./../../contexts/cart";

import { Container, CartImage, CartBudget, CartBudgetText } from './styles';

const cartImg = require('../../assets/images/cart.png')

const CartWidget: React.FC = ({ styles }) => {
  const navigation = useNavigation();
  const { items, totalUnits } = useContext(CartContext)

  useEffect(() => {
    console.log(items);
  }, [items])

  return (
    <Container style={styles} onPress={() => navigation.navigate('Cart')}>
      <CartImage source={cartImg} />

      <CartBudget>
        <CartBudgetText>{totalUnits}</CartBudgetText>
      </CartBudget>
    </Container>
  );
};

export default CartWidget;
