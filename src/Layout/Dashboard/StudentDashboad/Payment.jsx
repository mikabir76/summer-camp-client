import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cheakout from './Cheakout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCamp from '../../../Components/Hooks/useCamp';
import { useLocation } from 'react-router-dom';

const Payment = ({state}) => {
    const location = useLocation();
    const data = location.state;
console.log(data)
    const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    const [classes] = useCamp();
    // console.log(classes.map(price => ))
    const total = classes.reduce((sum, item)=> sum + item.price, 0)
    console.log(total)
//   const priceClass = classes.map(price => <Cheakout price={price}></Cheakout>)
   
    return (
        <div className='w-3/4 border-4'>
            <Helmet>
      <title>Summer Camp | Payment</title>
  </Helmet>
            <h1>Please Procces Payment</h1>

            <Elements stripe={stripePromise}>
            <Cheakout price={data}></Cheakout>
            </Elements>
        </div>
    );
};

export default Payment;