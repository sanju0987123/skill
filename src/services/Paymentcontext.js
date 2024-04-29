// PaymentContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const PaymentContext = createContext();

// Create a custom provider component
export const PaymentProvider = ({ children }) => {
  const [paymentkey, setpaymentkey] = useState("");

  // Define any functions or state updates here

  return (
    <PaymentContext.Provider value={{ paymentkey, setpaymentkey }}>
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook to use the context
export const usePaymentContext = () => {
  return useContext(PaymentContext);
};
