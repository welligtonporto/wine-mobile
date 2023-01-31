import { useState } from 'react';

import { FlatList } from "react-native";
import { Container, ScrollContainer, InfoText } from './styles';

import ShopHeader from '../../components/ShopHeader';
import Search from '../../components/Search';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 123,
      img: require('../../assets/images/logo.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      oldPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      },
      memberPrice: {
        raw: 30,
        formatted: "R$ 30,00"
      },
      nonMemberPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      }
    },
    {
      id: 1234,
      img: require('../../assets/images/logo.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      oldPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      },
      memberPrice: {
        raw: 30,
        formatted: "R$ 30,00"
      },
      nonMemberPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      }
    },
    {
      id: 12345,
      img: require('../../assets/images/logo.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      oldPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      },
      memberPrice: {
        raw: 30,
        formatted: "R$ 30,00"
      },
      nonMemberPrice: {
        raw: 37.40,
        formatted: "R$ 37,40"
      }
    }
  ]);

  return (
    <Container>
      <ShopHeader />
      
      <ScrollContainer>
        <Search />

        <InfoText>{items.length} produtos encontrados</InfoText>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <Card data={item} />
            );
          }}
        />
      </ScrollContainer>
    </Container>
  );
};

export default Home;
