import React, { useState, useEffect, useContext } from 'react';
import CardHorz from '../../components/CardHorz';
import ShopHeader from '../../components/ShopHeader';

import { CartContext } from "./../../contexts/cart";

import { Container, ItemsList } from './styles';

const Cart: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState<[]>([]);
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

        Promise.all(promise).then((completed: any) => setItemsToShow(completed));
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
          data={itemsToShow}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => {
            return (
              <CardHorz data={item} />
            );
          }}
      />
    </Container>
  );
};

export default Cart;
