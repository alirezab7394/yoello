import React, { useContext } from "react";
import "./Card.scss";
import { CartContext } from "../provider/CartProvider";
export default function Card({ details }) {
  const { addToSelectedCard } = useContext(CartContext);
  return (
    <div className="card" onMouseDown={() => addToSelectedCard(details)}>
      <div className="card-image">
        <img src={details.image_url} alt={details.name} loading="lazy" />
      </div>
      <div className="card-name">{details.name}</div>
    </div>
  );
}
