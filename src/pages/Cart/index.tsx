import React, { useState } from 'react';
import CardHorz from '../../components/CardHorz';

import { ItemsList } from './styles';

const Cart: React.FC = () => {
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

  return (
    <ItemsList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <CardHorz data={item} />
          );
        }}
    />
  );
};

export default Cart;
