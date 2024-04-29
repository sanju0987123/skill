import { ElementsConsumer, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Query } from 'appwrite';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { database } from 'services/appwrite'; // Assuming you have appwrite database imported

const CheckoutForm = ({ onSuccess }) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { id = "", amount = "" } = location.state || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log(id)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response1=await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_SIX,[Query.limit(100)]);
    const filteredResponse = response1.documents.filter(
      notification => (notification.$id===id )
    );
    if(filteredResponse.length>0)
    {
          const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `http://localhost:3000/ContractRent?id=${id}&amount=${amount}`,
            },
          });
      
          if (error) {
            console.log('Payment failed:', error.message);
          } else {
            // Handle successful payment
          }


    }
    else
    {

        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `http://localhost:3000/ContractHire?id=${id}&amount=${amount}`,
          },
        });

        if (error) {
          console.log('Payment failed:', error.message);
        } else {
          // Handle successful payment
        }
  }
  };

  

  return (
    <div className="flex justify-center items-center h-full relative z-10">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <p className="text-center text-gray-100 mb-4">Enter your account details securely</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" className="border border-gray-300 p-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="example@example.com" className="border border-gray-300 p-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="card" className="block text-sm font-medium text-gray-100 mb-2">Card Details</label>
            <div className="border border-gray-300 p-4 rounded-md w-full">
              <PaymentElement />
            </div>
          </div>
          <button
            disabled={!stripe}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Pay Now
          </button>
        </form>
        <div className="text-gray-500 text-sm mt-4">
          <p className="mb-2">By clicking "Pay Now", you agree to our <a href="#" className="text-blue-500 hover:underline">terms and conditions</a>.</p>
          <p>For any inquiries, please contact <a href="tel:123456789" className="text-blue-500 hover:underline">123-456-789</a>.</p>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const location = useLocation();
  const { id = "", amount = "" } = location.state || {};

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative">
      <h1 className="text-4xl text-gray-500 font-bold mb-8 italic z-20">Skill Sphere's Checkout</h1>
      <div className="max-w-md w-full">
        <InjectedCheckoutForm onSuccess={() => {}} />
      </div>
    </div>
  );
};

export default CheckoutPage;

function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}