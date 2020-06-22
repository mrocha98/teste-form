import React from 'react';
import NumberCircle from '../numberCircle';
import './styles.scss';

function CheckoutInfo({ children, number = 0, title = '' }) {
  return (
    <article className="checkout-info my-4">
      <header>
        <NumberCircle className="circle" number={number} isSmall />
        <h2 className="title is-5 has-text-weight-medium">{title}</h2>
      </header>
      <div className="content">{children}</div>
    </article>
  );
}

export default CheckoutInfo;
