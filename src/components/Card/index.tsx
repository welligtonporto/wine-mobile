import React from 'react';

import { Container, Text } from './styles';

const searchImg = require('../../assets/images/search.png')

const Card: React.FC = ({ data: { title } }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default Card;
