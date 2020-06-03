import React from "react";
import "./Payment.scss";
export default function Payment({ total }) {
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-btnGp">
          <div>ZERO</div>
          <div>Round up</div>
          <div>10%</div>
          <div>Custom</div>
        </div>
        <div className="payment-sum">
          <div className="payment-sum_row">
            <div>sub total</div>
            <div>{total}</div>
          </div>
          <div className="payment-sum_row">
            <div>tip</div>
            <div>{0}</div>
          </div>
        </div>
        <div className="payment-total">
          <div>Total</div>
          <div>{0 + total}</div>
        </div>
        <div className="payment-confirm">confirm payment</div>
      </div>
    </div>
  );
}
