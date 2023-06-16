import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState} from 'react';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import useAuth from '../../../Components/Hooks/useAuth';

const Cheakout = ({price}) => {
  const {user} = useAuth()
    console.log(price)
    const [clientSecrets, setClientSecrets] = useState('')
const [isError, setIsError] = useState('')
const [cardSuccess, setCardSuccess] = useState('')
const [proccessing, setProccessing] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    useEffect(()=>{
      console.log(price)
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecrets(res.data.clientSecret)
        })
    },[])
    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }
        console.log(card)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error)
            setIsError(error.message)
        }
        else{
          setIsError('')
            console.log('payment Method', paymentMethod)
            setCardSuccess('Paymet has been successfully!')
        }
        setProccessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
         clientSecrets,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displaName || 'anonymous',
                email: user?.email || 'unknown'
              },
            },
          },
        );
        if(confirmError){
          console.log(confirmError)
        }
        console.log(paymentIntent)
        setProccessing(false)
        if(paymentIntent.status === 'succeeded'){
          
          // Todo next step
        }
    }
    return (
       <>
        <form className='h-full' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm btn-primary mt-8' type="submit" disabled={!stripe || !clientSecrets || proccessing}>
        Pay
      </button>
    </form>
    {
      isError && <p className='text-xl text-center text-error'>* Error {isError}</p>
    }
    {
      cardSuccess && <p className='text-xl text-center text-success'>*  {cardSuccess}</p>
    }
       </>
    );
};

export default Cheakout;