import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("hello");
  }, []);

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(0);
  const addToCart = (item, qty, price) => {
    for (let i = 0; i < qty; i++) {
      setCart([...cart, [item, price]]);
    }
    console.log(cart)
    setReloadKey(Math.random());
  };
  const removeFromCart = (item, qty) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {" "}
      <Navbar key={reloadKey} cart={cart} />
      <Component
        {...pageProps}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </>
  );
}
