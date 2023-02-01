import React, { useState } from 'react';

import { Container, TextAmount, Button, ButtonText } from './styles';

const Amount: React.FC = ({ units, handleChange }) => {
  function handleRemove(){
    let newAmount: any = parseInt(units) - 1;
    newAmount = newAmount > 1 ? newAmount : 1;
  
    handleChange(newAmount)
  }

  function handleAdd(){
    let newAmount: any = parseInt(units) + 1;

    handleChange(newAmount)
  }

  return (
    <Container>
      <Button onPress={handleRemove}>
        <ButtonText>-</ButtonText>
      </Button>

      <TextAmount>{units}</TextAmount>

      <Button onPress={handleAdd}>
        <ButtonText>+</ButtonText>
      </Button>
    </Container>
  );
};

export default Amount;
