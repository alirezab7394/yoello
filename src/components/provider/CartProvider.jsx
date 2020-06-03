import React, { createContext, useState } from "react";
export const CartContext = createContext({
  bag: {},
  addItem: () => {},
  addByNumToCart: () => {},
  selectedCard: {},
  addToSelectedCard: () => {},
  removeFromSelectedCard: () => {},
});
const CartProvider = ({ children }) => {
  const [bag, setBag] = useState({});
  const [selectedCard, setSelectedCard] = useState();
  // add Item to cart
  let addItem = (item) => {
    if (bag[item.id]) {
      setBag({
        ...bag,
        [item.id]: { ...item, orderNum: bag[item.id].orderNum + 1 },
      });
    } else setBag({ ...bag, [item.id]: { ...item, orderNum: 1 } });
  };
  let addByNumToCart = (id, num) => {
    // send num 0 to remove by id
    if (num === 0) {
      delete bag[id];
      setBag({ ...bag });
    } else {
      let temp = bag[id];
      temp["orderNum"] = num;
      setBag({ ...bag, [id]: temp });
    }
  };
  // add and remove item from selected card
  let addToSelectedCard = (item) => {
    setSelectedCard(item);
  };

  let removeFromSelectedCard = () => {
    setSelectedCard();
  };
  return (
    <CartContext.Provider
      value={{
        bag,
        addItem,
        selectedCard,
        addToSelectedCard,
        removeFromSelectedCard,
        addByNumToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
