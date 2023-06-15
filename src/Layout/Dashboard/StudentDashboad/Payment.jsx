import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cheakout from './Cheakout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {

    const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div className='w-3/4 border-4'>
            <Helmet>
      <title>Summer Camp | Payment</title>
  </Helmet>
            <h1>Please Procces Payment</h1>

            <Elements stripe={stripePromise}>
            <Cheakout></Cheakout>
            </Elements>
        </div>
    );
};

export default Payment;