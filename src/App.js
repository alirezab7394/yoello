import React from "react";
import "./scss/_main.scss";
import Layout from "./components/layout/Layout";
import CartProvider from "./components/provider/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout />
      </CartProvider>
    </div>
  );
}

export default App;
