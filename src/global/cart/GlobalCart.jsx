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
    
    return (
        <GlobalCart.Provider value={{ cart, setCart, countProducts, setCountProducts, handleCountProducts }}>
            {children}
        </GlobalCart.Provider>
    )
}