import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import CardHorz from '../../components/CardHorz';
import ShopHeader from '../../components/ShopHeader';
import Button from '../../components/Button';

import { CartContext } from "./../../contexts/cart";

import { Container, ItemsList, Loader, InfoText, ContainerInfo, FooterCart } from './styles';

const Cart: React.FC = () => {
  const navigation = useNavigation();
  const [itemsToShow, setItemsToShow] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { items } = useContext(CartContext)

  useEffect(() => {
    async function getItems(){
      try {
        const promise = items.map(async item => {
          let response: any = await fetch(`https://api.punkapi.com/v2/beers/${item.productId}`, {
            method: "GET"
          });

          response = await response.json();

          return ({
            id: response[0].id,
            img: response[0].image_url,
            title: response[0].name,
            stimulusImg: require('../../assets/images/example-products/black.png'),
            units: item.units
          })
        })

        Promise.all(promise).then((completed: any) => {
          setItemsToShow(completed);
          setIsLoading(false);
        });
      } catch (error){
        console.log(error);
      }
    }

    getItems();
  }, [items]);

  return (
    <Container>
      <ShopHeader variation="canBack" />

      <ItemsList
        ListHeaderComponent={
          <>  
            {isLoading && (
              <Loader size="large" />
            )}

            {!isLoading && itemsToShow.length === 0 && (
              <ContainerInfo>
                <InfoText>Não há produtos no carrinho.</InfoText>
                <Button variation="secondary" onPress={() =>  navigation.navigate('Home')}>Ver Produtos</Button>
              </ContainerInfo>
            )}
          </>
        }
        data={itemsToShow}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <CardHorz data={item} />
          );
        }}
        ListFooterComponent={
          <FooterCart />
        }
      />
    </Container>
  );
};

export default Cart;
