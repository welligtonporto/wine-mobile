import React, { useState, useEffect } from 'react';

import { Container, ItemsList, InfoText } from './styles';

import ShopHeader from '../../components/ShopHeader';
import Search from '../../components/Search';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 123,
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
      id: 1237,
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
      id: 12348,
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
      id: 123459,
      img: require('../../assets/images/example-products/tinto.png'),
      title: "Toro Loco D.O.P. Utiel-Requena Tempranillo 2017",
      stimulus: "15% OFF",
      stimulusImg: require('../../assets/images/example-products/black.png'),
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
  ]);

  useEffect(() => {
    async function getItems(){
      fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
      .then((response) => response)
      .then((json) => console.log(json))
      .catch((error) => console.error(error))
      .finally(() => console.log(false));
    }

    // getItems();
  }, []);

  return (
    <Container>
      <ShopHeader variation="default" />
      
      {/* <ScrollContainer>
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
      </ScrollContainer> */}

      <ItemsList
        ListHeaderComponent={
        <>
          <Search />

          <InfoText>{items.length} produtos encontrados</InfoText>
        </>}
        data={items}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Card data={item} />
          );
        }}
      />
    </Container>
  );
};

export default Home;
