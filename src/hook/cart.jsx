import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

function CartsProvider({ children }) {
    const [carts, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:carts`)) || []);

    function addDishToCart(data) {
        // setCart([...carts, data])
        console.log(data)
    }

    function removeDishFromCart(data) {
        setCart(carts.filter((dish) => dish.id !== data.id))
    }

    useEffect(() => {
        localStorage.setItem(`@foodexplorer:carts`, JSON.stringify(carts));
    }, [carts])

    return (
        <CartContext.Provider value={{ 
            carts,
            addDishToCart,
            removeDishFromCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    return context;
}

export { CartsProvider, useCart };