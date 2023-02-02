import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CartContext } from "./../../contexts/cart";

import { Container, CartImage, CartBudget, CartBudgetText } from './styles';

const cartImg = require('../../assets/images/cart.png')

interface CartWidgetProps {
  styles: any;
}

const CartWidget: React.FC<CartWidgetProps> = ({ styles }) => {
  const navigation = useNavigation();
  const { totalUnits } = useContext(CartContext)

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
