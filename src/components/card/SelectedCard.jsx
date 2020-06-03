import React, { useContext } from "react";
import "./Card.scss";
import { CartContext } from "../provider/CartProvider";
import TextCollapsed from "./TextCollapsed";
export default function SelectedCard() {
  const { selectedCard, removeFromSelectedCard, addItem } = useContext(
    CartContext
  );

  return (
    <div className={`selectedCard ${selectedCard ? "" : "deactive"}`}>
      <div className="selectedCard-blur"></div>
      <div className="selectedCard-card">
        <div
          className="selectedCard-card_close"
          onPointerDown={() => removeFromSelectedCard()}
        >
          Close
        </div>
        {selectedCard ? (
          <div className="selectedCard-card_container">
            <div className="selectedCard-card_name">{selectedCard.name}</div>
            <div className="selectedCard-card_des">
              <div className="selectedCard-card_tagline">
                {selectedCard.tagline}
              </div>
              <div className="selectedCard-card_tagline">
                {selectedCard.abv}
              </div>
              <TextCollapsed>{selectedCard.description}</TextCollapsed>
              <TextCollapsed list={selectedCard.food_pairing} />
            </div>
            <div className="selectedCard-card_image">
              <div className="selectedCard-card_imageContainer">
                <img src={selectedCard.image_url} alt={selectedCard.name} />
              </div>
            </div>
            <div
              className="selectedCard-card_add"
              onClick={() => {
                addItem(selectedCard);
                removeFromSelectedCard();
              }}
            >
              Add too cart
            </div>
          </div>
        ) : (
          <div
            className="selectedCard-card_container"
            style={{ height: 200 }}
          ></div>
        )}
      </div>
    </div>
  );
}
