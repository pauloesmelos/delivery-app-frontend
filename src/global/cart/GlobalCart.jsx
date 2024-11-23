import React from 'react';

export const GlobalCart = React.createContext();
export const GlobalCartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [countProducts, setCountProducts] = React.useState(0);
    const handleCountProducts = (operation) => {
        if(operation === "add") {
            setCountProducts(count => count + 1);
        }
        else {
            setCountProducts(count => count - 1);
        }
    }
    const addProductCart = (product) => {
        let array = [...cart, product];
        setCart(array);
    }
    const getTotalCart = () => {
        return cart.reduce((acumulador, item) => acumulador + Number.parseFloat(item.amount), 0);
    }

    return (
        <GlobalCart.Provider value={{ cart, setCart, countProducts, setCountProducts, handleCountProducts, addProductCart, getTotalCart }}>
            {children}
        </GlobalCart.Provider>
    )
}