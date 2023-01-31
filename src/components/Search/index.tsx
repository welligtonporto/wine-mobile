import React, { useState } from 'react';

import { Container, Input, SearchImg } from './styles';

const searchImg = require('../../assets/images/search.png')

const Search: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  return (
    <Container>
      <SearchImg source={searchImg} />

      <Input
        onChangeText={setTerm}
        value={term}
        placeholder="O que você está procurando?"
      />
    </Container>
  );
};

export default Search;
