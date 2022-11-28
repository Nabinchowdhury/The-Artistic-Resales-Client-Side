import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);


    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }

    const stripePromise = loadStripe('pk_test_51M6vTHBQnYBdNhzdMBWfTqvVoHwOv1Jo10ocHcfLFrvo8sFpPfwKJjDMg0SmNX3J9J1zTGWfjXir2I2jNasHNHZj00ZHwWXOnS');

    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-3xl my-12 text-left'>Pay to buy {booking.itemName}</h3>
            <div className='my-6 w-96' >
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;