import React, { useContext } from "react";
import { ReactComponent as Trash } from "../../assets/svg/delete.svg";
import { CartContext } from "../provider/CartProvider";
import "./Card.scss";

export default function ShoppingCard({
  id,
  abv,
  image_url,
  name,
  orderNum,
  tagline,
  style = {},
}) {
  const { addByNumToCart } = useContext(CartContext);
  return (
    <div className="shoppingCard" style={style}>
      <div className="shoppingCard-imageContainer">
        <img src={image_url} alt={name} />
        <div className="shoppingCard-imageContainer_price">{abv}$</div>
      </div>
      <div className="shoppingCard-text">
        <div className="shoppingCard-text_name">{name}</div>
        <div className="shoppingCard-text_des">{tagline}</div>
      </div>
      <div className="shoppingCard-action">
        <div
          className="shoppingCard-action_btn black"
          onClick={() => addByNumToCart(id, orderNum - 1)}
        >
          -
        </div>
        <div className="shoppingCard-action_num">{orderNum}</div>
        <div
          className="shoppingCard-action_btn yellow"
          onClick={() => addByNumToCart(id, orderNum + 1)}
        >
          +
        </div>
        <div
          className="shoppingCard-action_delete"
          onClick={() => addByNumToCart(id, 0)}
        >
          <Trash />
        </div>
      </div>
    </div>
  );
}
