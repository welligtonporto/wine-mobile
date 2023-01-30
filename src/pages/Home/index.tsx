import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Container } from './styles';
import ShopHeader from '../../components/ShopHeader';

const Home: React.FC = () => {
  return (
    <Container>
      <ShopHeader />
      
      <ScrollView>
        <Text>Hi</Text>
      </ScrollView>
    </Container>
  );
};

export default Home;
