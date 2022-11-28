import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, customerEmail, itemName, itemId, customerName } = booking

    useEffect(() => {

        fetch("https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("AccessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log(error)
        } else {
            setCardError("")
        }

        setSuccess("")
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: customerEmail,
                        name: customerName,

                    },
                },
            },
        );

        if (confirmError) {
            return setCardError(confirmError.message)
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                transactionId: paymentIntent.id,
                price,
                email: customerEmail,
                bookingId: _id,
                itemId,
                itemName
            }
            setSuccess("Payment SuccessFull")

            fetch("https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/payment", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem("AccessToken")}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess(`Congratulatiomn!!!!`)
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button className='btn btn-success btn-sm mt-10' type="submit"

                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success &&
                <> <p className='text-green-500'>{success}</p>
                    <p >Transaction Id : {transactionId}</p>
                </>
            }
        </>
    );
};

export default CheckoutForm;