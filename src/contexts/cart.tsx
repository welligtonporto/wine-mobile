import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext({});

const CartProvider: React.FC = ({ children }) => {
    const [totalUnits, setTotalUnits] = useState<number>(0);
    const [items, setItems] = useState<Array>([]);

    async function addToCart(productId){
        try {
            const indexToEdit = items.findIndex(item => item.productId === productId);
            let newItems = JSON.parse(JSON.stringify(items));

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

            const jsonValue = JSON.stringify({ totalUnits: newTotalUnits, items: newItems })
            await AsyncStorage.setItem('@storage_Cart', jsonValue)
        } catch (error){
            console.log(error);
        }
    }

    async function changeUnits(productId, newUnits){
        try {
            const indexToEdit = items.findIndex(item => item.productId === productId);
            let newItems = JSON.parse(JSON.stringify(items));

            newItems[indexToEdit] = {
                ...newItems[indexToEdit],
                units: parseInt(newUnits)
            }

            const newTotalUnits = newItems.reduce((partialSum, item) => partialSum + item.units, 0);
            setTotalUnits(newTotalUnits);

            setItems(newItems);

            const jsonValue = JSON.stringify({ totalUnits: newTotalUnits, items: newItems })
            await AsyncStorage.setItem('@storage_Cart', jsonValue)
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        async function getCartFromStorage(){
            try {
                let cartOnStorage = await AsyncStorage.getItem('@storage_Cart')
                cartOnStorage = JSON.parse(cartOnStorage);
    
                setTotalUnits(cartOnStorage.totalUnits);
                setItems(cartOnStorage.items);
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