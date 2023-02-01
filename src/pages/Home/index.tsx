import React, { useState, useEffect } from 'react';

import { Container, ItemsList, InfoText } from './styles';

import ShopHeader from '../../components/ShopHeader';
import Search from '../../components/Search';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems(){
      try {
        let response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10', {
          method: "GET"
        });
        

        response = await response.json();
        return setItems(response.map(item => ({
            id: item.id,
            img: item.image_url,
            title: item.name,
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
        })))
      } catch (error){
        console.log(error);
      }
    }

    getItems();
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
