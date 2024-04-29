import React from 'react';
import { usePaymentContext } from 'services/Paymentcontext';
import { createPaymentIntent } from 'services/appwrite';
import { useNavigate } from 'react-router-dom';

const Pb = ({ amount,id }) => {
  const navigate = useNavigate();
  const { setpaymentkey, paymentkey } = usePaymentContext();

  const handle = async () => {
    const res = await createPaymentIntent(amount);
    console.log(res);
    console.log(typeof res);
    setpaymentkey(JSON.parse(res).paymentIntent);
    console.log(paymentkey);
    navigate('/checkout',{state:{id:id,amount:amount}});
  };

  return (
    <button
      onClick={handle}
      className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-100"
    >
      Pay  ₹{amount}
    </button>
  );
};

export default Pb;