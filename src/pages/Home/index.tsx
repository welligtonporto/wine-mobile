import React, { useState, useEffect } from 'react';

import { Container, ItemsList, InfoText, ContainerPagination, Loader } from './styles';

import ShopHeader from '../../components/ShopHeader';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const [items, setItems] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [requestItems, setRequestItems] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPagining, setIsPagining] = useState<boolean>(false);

  function handleChangeSearchTerm(newTerm: string){
    setSearchTerm(newTerm);
  }

  function handlePagination(){
    setPage(page + 1);
  }

  useEffect(() => {
    async function getItems(){
      try {
        if (!requestItems) return;

        (page === 1) ? setIsLoading(true) : setIsPagining(true)

        const urlToFetch: string = searchTerm ? `https://api.punkapi.com/v2/beers?page=${page}&per_page=10&beer_name=${searchTerm}` : `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;
        let response: any = await fetch(urlToFetch, {
          method: "GET"
        });

        response = await response.json();

        const newItems: [] = response.map((item: any) => ({
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
        }));

        setItems(page === 1 ? newItems : [...items, ...newItems]);
        setRequestItems(false);
        setIsLoading(false);
        setIsPagining(false);
      } catch (error){
        console.log(error);
      }
    }

    getItems();
  }, [requestItems]);

  useEffect(() => {
    setRequestItems(true);
  }, [page]);

  useEffect(() => {
    setPage(1);
    setRequestItems(true);
  }, [searchTerm]);

  return (
    <Container>
      <ShopHeader variation="default" />

      <ItemsList
        ListHeaderComponent={
        <>
          <Search handleChange={handleChangeSearchTerm} />
          
          {!isLoading && items.length > 0 && (
            <InfoText>Exibindo {items.length} produtos</InfoText>
          )}

          {!isLoading && items.length === 0 && (
            <InfoText>Nenhum produto encontrado para "{searchTerm}"</InfoText>
          )}

          {isLoading && (
            <Loader size="large" />
          )}
        </>}
        data={items}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          if (isLoading) return null;

          return (
            <Card data={item} />
          );
        }}
        ListFooterComponent={
          <ContainerPagination>
            {isPagining && (
              <Loader size="large" />
            )}

            {items.length > 0 && items.length % 10 === 0 && !isLoading && !isPagining && (
              <Button variation="secondary" onPress={handlePagination}>Mais Produtos</Button>
            )}
          </ContainerPagination>
        }
      />
    </Container>
  );
};

export default Home;
