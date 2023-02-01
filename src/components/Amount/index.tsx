import React, { useState } from 'react';

import { Container, Input, Button, ButtonText } from './styles';

const searchImg = require('../../assets/images/search.png')

const Amount: React.FC = () => {
  const [amount, setAmount] = useState<string>("1");

  function handleRemove(){
    let newAmount = parseInt(amount) - 1;
    newAmount = newAmount > 1 ? newAmount : 1;
  
    setAmount(String(newAmount))
  }

  function handleAdd(){
    let newAmount = parseInt(amount) + 1;

    setAmount(String(newAmount))
  }

  return (
    <Container>
      <Button onPress={handleRemove}>
        <ButtonText>-</ButtonText>
      </Button>

      <Input
        keyboardType="number-pad"
        onChangeText={setAmount}
        value={amount}
      />

      <Button onPress={handleAdd}>
        <ButtonText>+</ButtonText>
      </Button>
    </Container>
  );
};

export default Amount;
