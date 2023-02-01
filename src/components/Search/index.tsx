import React, { useState, useEffect } from 'react';

import { Container, Input, SearchImg } from './styles';

const searchImg = require('../../assets/images/search.png')

const Search: React.FC = ({ handleChange }) => {
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      handleChange(term);
    }, 500);

    return () => clearTimeout(delayDebounceFn)
  }, [term])

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
