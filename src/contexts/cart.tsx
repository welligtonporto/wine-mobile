import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Toast from 'react-native-root-toast';

interface CartContextProps {
    totalUnits: number;
    items: { productId: number, units: number }[];
    addToCart(productId: number): void;
    changeUnits(productId: number, newUnits: number): void;
}

interface CartProviderProps {
    children: any;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [totalUnits, setTotalUnits] = useState<number>(0);
    const [items, setItems] = useState<{ productId: number, units: number }[]>([]);

    async function addToCart(productId: number){
        try {
            const indexToEdit = items.findIndex(item => item.productId === productId);
            let newItems: { productId: number, units: number }[] = JSON.parse(JSON.stringify(items));

            if (indexToEdit >= 0){
                newItems[indexToEdit] = {
                    ...newItems[indexToEdit],
                    units: newItems[indexToEdit].units + 1
                }
            } else {
                newItems.push({
                    productId,
                    units: 1
                });
            }

            const newTotalUnits = newItems.reduce((partialSum, item) => partialSum + item.units, 0);
            setTotalUnits(newTotalUnits);

            setItems(newItems);
            Toast.show('Produto adicionado no carrinho!', {
                duration: Toast.durations.SHORT,
            });

            const jsonValue = JSON.stringify({ totalUnits: newTotalUnits, items: newItems })
            await AsyncStorage.setItem('@storage_Cart', jsonValue)
        } catch (error){
            console.log(error);
        }
    }

    async function changeUnits(productId: number, newUnits: number){
        try {
            const indexToEdit = items.findIndex(item => item.productId === productId);
            let newItems: { productId: number, units: number }[] = JSON.parse(JSON.stringify(items));
            
            if (newUnits > 0){
                newItems[indexToEdit] = {
                    ...newItems[indexToEdit],
                    units: newUnits
                }
            } else {
                newItems = newItems.filter((_, index) => index !== indexToEdit);
            }

            const newTotalUnits = newItems.reduce((partialSum: number, item) => partialSum + item.units, 0);
            setTotalUnits(newTotalUnits);

            setItems(newItems);

            if (newUnits > 0) {
                Toast.show('Quantidade alterada!', {
                    duration: Toast.durations.SHORT,
                });
            } else {
                Toast.show('Produto removido!', {
                    duration: Toast.durations.SHORT,
                });
            }            

            const jsonValue = JSON.stringify({ totalUnits: newTotalUnits, items: newItems })
            await AsyncStorage.setItem('@storage_Cart', jsonValue)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        async function getCartFromStorage(){
            try {
                let cartOnStorage: any = await AsyncStorage.getItem('@storage_Cart')
                cartOnStorage = JSON.parse(cartOnStorage);
    
                setTotalUnits(cartOnStorage.totalUnits || 0);
                setItems(cartOnStorage.items || []);
            } catch (error){
                console.log(error);
            }
        }

        getCartFromStorage();
    }, []);

    return (
        <CartContext.Provider value={{ totalUnits, items, addToCart, changeUnits }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;