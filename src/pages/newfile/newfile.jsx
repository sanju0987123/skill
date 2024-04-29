import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { database,account } from 'services/appwrite';
import Pb from 'components/PaymentButton';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Newfile = () => {

  const [minAmount, setMinAmount] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const location = useLocation();
  const {  email = "", emailsender = "", id = ""} = location.state || {};
  console.log(location.state);
  console.log(id);

  const handleInput = (e) => {
    const enteredAmount = parseInt(e.target.value) || 0;
    const calculatedAmount = enteredAmount + minAmount;
    const feeAmount = calculatedAmount * 0.05;
    const finalAmount = calculatedAmount + feeAmount;
    setUserInput(enteredAmount);
    setTotalAmount(finalAmount);
  };

  useEffect(() => {
    const fetchPayscale = async () => {
      try {
        const response = await database.getDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_NINE, id);
        console.log(response);
        if (response.Payscale === "less then 1k") {
          setMinAmount(500);
        } else if (response.Payscale === "3k-10k") {
          setMinAmount(3000);
        } else if (response.Payscale === "1k-3k") {
          setMinAmount(1000);
        } else {
          setMinAmount(10000);
        }
      } catch (error) {
        console.log(error);
        // If document not found, fetch from collection six
      if (error.code === 404) {
        try {
          const responseSix = await database.getDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_SIX, id);
          console.log(responseSix);
          if (responseSix.Payscale === "less then 1k") {
            setMinAmount(500);
          } else if (responseSix.Payscale === "3k-10k") {
            setMinAmount(3000);
          } else if (responseSix.Payscale === "1k-3k") {
            setMinAmount(1000);
          } else {
            setMinAmount(10000);
          }
        } catch (errorSix) {
          console.log(errorSix);
          // Handle error if document not found in collection six
        }
      }
    }
  };

  fetchPayscale();
}, []);

  return (
    <>
      <Header className="absolute flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full z-40" />
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        <header className="text-4xl font-bold  text-chocolate font-quicksand text-center mb-8">
          Welcome to Skillsphere Payment Gateway
        </header>
        <marquee className="text-sm text-red-500 mb-4" direction="left">
          It's a secure page and uses a secure Stripe connection.
        </marquee>
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-2">
            Enter the amount to be paid for the skill holder:
          </label>
          <input 
            type="number" 
            id="amount" 
            name="amount" 
            onChange={handleInput} 
            value={userInput}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
            placeholder="Enter amount"
          />
          {userInput > 0 && (
            <div className="mt-4">
              <p className="text-gray-300 mb-2">Subtotal: ₹{userInput.toFixed(2)}</p>
              <p className="text-gray-300 mb-2">5% Processing Fee: ₹{(userInput * 0.05).toFixed(2)}</p>
              <hr className="my-2" />
              <p className="text-xl font-bold font-quicksand text-chocolate">Total Amount: ₹{totalAmount.toFixed(2)}</p>
              <p classname=" text-sm  font-quicksand text-white-A700">includes your Previous selected minimum fees ₹{( minAmount)} </p>
            </div>
          )}
          <div className="flex justify-center mt-6">
            <Pb amount={totalAmount} id={id} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Newfile;