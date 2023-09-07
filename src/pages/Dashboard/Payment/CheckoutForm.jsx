import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
    const {user} = useAuth()
    const stripe = useStripe();
    const element = useElements()
    const [cardError, setCardError] = useState("");
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure])


    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            setCardError("")
            console.log('PaymentMethod', paymentMethod);
        }

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous"
                    },
                },
            },
        );
        if(confirmError){
            setCardError()
        }
        console.log(paymentIntent);
    }
    return (
        <>
            <form className="px-20" onSubmit={handleSubmit}>
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
                <button className="px-12 my-10 btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-lg text-red-600 px-20">{cardError}</p>}
        </>
    );
};

export default CheckoutForm;