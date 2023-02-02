import React, { useState } from 'react';

import { Container, TextAmount, Button, ButtonText } from './styles';

interface AmountProps {
  units: number;
  handleChange(newAmount: number): void;
}

const Amount: React.FC<AmountProps> = ({ units, handleChange }) => {
  function handleRemove(){
    let newAmount: any = units - 1;
    newAmount = newAmount >= 0 ? newAmount : 0;
    
    handleChange(newAmount)
  }

  function handleAdd(){
    let newAmount: any = units + 1;

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
