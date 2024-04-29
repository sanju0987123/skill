
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { Client, Functions } from 'appwrite';
import InjectedCheckoutForm from 'payment/CheckOut';
import { usePaymentContext } from 'services/Paymentcontext';
import { createPaymentIntent } from 'services/appwrite';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OxrmVSGlvGkmiCR6Okz57zTKTC4sdu2dHDr0KKzEjJaoJx58uaH3QB2Ev8wPHMW4dacd79rgT9oukqdMUbT6Km200zdFeg5wG');

// 

       
  


  
export default function Payment() {
    const {setpaymentkey,paymentkey}= usePaymentContext();
   
  const options = {
    // passing the client secret obtained from the server
    clientSecret: paymentkey,
  };
console.log(paymentkey)
  return (
    <>
    {options.clientSecret?
    <Elements stripe={stripePromise} options={options}>
      <InjectedCheckoutForm />
    </Elements>:
      <p>Wrong to process</p>}
      
    </>
  );
};