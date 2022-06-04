import React from 'react';
import Subtotal from './Subtotal';
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">

      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h1 className="checkout__title">
            Your shopping Basket
          </h1>
        </div>
      </div>
{/* seperation between right and left */}
      <div className="checkout__right">
        <h2>
          <Subtotal />
        </h2>
      </div>

    </div>
  )
}

export default Checkout;