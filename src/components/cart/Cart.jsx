import React, { useContext, useState } from "react";
import "./Cart.scss";
import { ReactComponent as CartSvg } from "../../assets/svg/cart.svg";
import { CartContext } from "../provider/CartProvider";
import _ from "lodash";
import ShoppingCard from "../card/ShoppingCard";
import Payment from "./Payment";
export default function Cart() {
  const { bag } = useContext(CartContext);
  let total = _.map(bag, (item) => item.orderNum * item.abv);
  if (total.length > 0) total = total.reduce((i, r) => i + r);

  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`cart-blur ${active ? "active" : "deactive"}`}
        onClick={(e) => {
          e.stopPropagation();
          setActive(false);
        }}
      ></div>
      <div
        className={`cart ${active ? "active" : "deactive"}`}
        onClick={() => !active && setActive(true)}
      >
        <div className="cart-header">
          <CartSvg />
          &nbsp; Shopping Cart
        </div>

        <div
          className={`cart-body ${active ? "big" : "small"} ${
            Object.keys(bag).length !== 0 ? "active" : "deactive"
          }`}
        >
          <div
            style={{
              width: "100%",
              height: active ? "30vh" : "100%",
              overflow: "auto",
              display: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {_.map(bag, (item) => (
              <ShoppingCard key={item.id + item.name} {...item} />
            ))}
          </div>
          <Payment total={Number(total) ? total : 0} />
        </div>
      </div>
    </>
  );
}
