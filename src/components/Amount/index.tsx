import React, { useState } from 'react';

import { Container, TextAmount, Button, ButtonText } from './styles';

const Amount: React.FC = ({ handleChange }) => {
  const [amount, setAmount] = useState<string>("1");

  function handleRemove(){
    let newAmount: any = parseInt(amount) - 1;
    newAmount = newAmount > 1 ? newAmount : 1;
    newAmount = String(newAmount)
  
    setAmount(newAmount)
    handleChange(newAmount)
  }

  function handleAdd(){
    let newAmount: any = parseInt(amount) + 1;
    newAmount = String(newAmount)

    setAmount(newAmount)
    handleChange(newAmount)
  }

  return (
    <Container>
      <Button onPress={handleRemove}>
        <ButtonText>-</ButtonText>
      </Button>

      <TextAmount>{amount}</TextAmount>

      <Button onPress={handleAdd}>
        <ButtonText>+</ButtonText>
      </Button>
    </Container>
  );
};

export default Amount;
