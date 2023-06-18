import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({});

function CartsProvider({ children }) {
  const [carts, setCart] = useState(
    JSON.parse(localStorage.getItem(`@foodexplorer:carts`)) || []
  );

  function addDishToCart(data, quantity, image) {
    try {
      const { id, title, price } = data;
      const priceFormatted = quantity * Number(price.replace(",", "."));

      const order = { id, title, price: priceFormatted, image, quantity };

      setCart((prevState) => [...prevState, order]);
      console.log(carts);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o item ao carrinho");
      }
    }

    alert("Item adicionado ao carrinho");
  }

  function removeDishFromCart(data) {
    setCart(carts.filter((dish) => dish.id !== data.id));
  }

  const total = carts.reduce((value, item) => {
    return value + item.price
}, 0) 

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:carts`, JSON.stringify(carts));
    console.log(total)
  }, [carts]);

  return (
    <CartContext.Provider
      value={{
        total: String(total.toFixed(2)).replace('.', ','),
        carts,
        addDishToCart,
        removeDishFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartsProvider, useCart };
