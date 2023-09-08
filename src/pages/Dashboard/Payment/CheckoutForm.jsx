import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import "./CheckoutForm.css";

const CheckoutForm = ({ price, cart }) => {
    const {user} = useAuth();
    const stripe = useStripe();
    const element = useElements()
    const [cardError, setCardError] = useState("");
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [proccessing, setProccessing] = useState(false);
    const [transactionId, setTransactionId] = useState("")

    useEffect(() => {
        if(price > 0){
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
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

        setProccessing(true);

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

        setProccessing(false)

        if (paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id)
            const payment = {
               email: user?.email,
               transactionId: paymentIntent.id,
               price,
               date: new Date(),
               quantity: cart.length,
               cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item._manuItemId),
               status: "service pending",
               itemNames: cart.map(item => item.name)
            
            }
            axiosSecure.post("/payments", payment)
            .then(res => {
                console.log(res);
                if(res.data.result.insertedId){
                    // Confirm message 
                }
            })
            // TODO next step 
        }
        console.log(paymentIntent);
    }
    return (
        <>
            <form className="" onSubmit={handleSubmit}>
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
                <div className="ml-28">
                    <button className="px-12 my-5 btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white" type="submit" disabled={!stripe || !clientSecret || proccessing}>
                        Payment
                    </button>
                </div>
            </form>
            {cardError && <p className="text-lg text-red-600 px-20">{cardError}</p>}
            {transactionId && <p className="text-lg text-green-600">Transaction complete with transactionId :{transactionId}</p> }
        </>
    );
};

export default CheckoutForm;