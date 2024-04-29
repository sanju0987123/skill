import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { database, account,storage } from "services/appwrite"; // Assuming account and database are imported from your Appwrite services
import { v4 as uuidv4 } from 'uuid';
import { Img } from "components";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Query } from "appwrite";
const MessageThree = () => {
  const location = useLocation();
  const {  email = "", emailsender = "", notificationId = "",profileImage=""} = location.state || {};
  console.log(location.state);
  console.log(emailsender);
  console.log(email);
  console.log(profileImage);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState(""); // State to hold the user's email
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [url,setUrl]=useState("");
  
  useEffect(() => {
  
    async function fetchData() {
      try {
        // Get current user's email
        const res = await account.get("current");
        setUserEmail(res.email);
        
        fetchMessages();
        const res1=await database.listDocuments(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_SIX,[Query.limit(100)]);
        console.log(res1);
        const document=res1.documents.find((doc) => doc.$id === notificationId);
        console.log(document);
        if(document)
        {
          const response = await database.getDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ELEVEN,notificationId);
          console.log(response);

              if (!response) {
                console.log("Document not found.");
              } else {
                if (!response.paymentIntentEmail && !response.paymentIntentEmailSender) {
                  // If both paymentIntentEmail and paymentIntentEmailSender are null
                  alert("No payment has been submitted.");

                } else if (!response.paymentIntentEmail) {
                  // If paymentIntentEmail is null
                  // alert(`${response.emailSender} has submitted the money.`);
                  toast.error(`${response.emailSender} has submitted the money.`)

                } else if (!response.paymentIntentEmailSender) {
                  // If paymentIntentEmailSender is null
                  // alert(`${response.email} has submitted the money.`);
                  toast.info(`${response.email} has submitted the money.`)
                } else {
                  console.log("Both paymentIntentEmail and paymentIntentEmailSender are not null.");
                }
              }

           
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    }

    fetchData();
  }, []);

  const fetchMessages = async () => {
    try {
      const result = await database.listDocuments(
        process.env.REACT_APP_DB_ID,
        process.env.REACT_APP_COLLECTION_ID_EIGHT,[Query.limit(100)]
      );

      const filteredMessages = result.documents.filter(
        (message) =>
          (message.emailsender === userEmail && message.email === email) ||
          (message.emailsender === email && message.email === userEmail) ||
          message.notificationId === notificationId
      );

      filteredMessages.sort((a, b) => a.timestamp - b.timestamp);
      console.log(filteredMessages[0]);
      const imageUrl = await getImageUrl(filteredMessages.email);
      console.log(imageUrl);
      setUrl(imageUrl);
      console.log(url);
      setMessages(filteredMessages);

    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const getImageUrl = async (email) => {
    try {
      const response = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_FIVE,[Query.limit(100)]);
      const document = response.documents.find((doc) => doc.email === email);
      if (document) {
        // Use the image ID to fetch the image from storage
        const imageUrl = await storage.getFilePreview(process.env.REACT_APP_COLLECTION_ID_FIVE,document.imageId);
        return imageUrl;
      } else {
        // If profile image not found, return a default image URL
        return "default.png";
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      toast.error("image not fetched")
      return "default.png"; // Return default image URL in case of an error
    }
  };

  const handleSendMessage = async () => {
    try {
      const currentDate = new Date();
      const timestamp = currentDate.toISOString();
      const res = await database.createDocument(
        process.env.REACT_APP_DB_ID,
        process.env.REACT_APP_COLLECTION_ID_EIGHT,
        uuidv4(),
        {
          emailsender: userEmail,
          email: emailsender,
          notificationId: notificationId,
          message: newMessage,
          timestamp: timestamp
        }
      );

      fetchMessages();
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message:", error)
    }
  };

  const handlePayNow = () => {
    navigate('/newfile', { state: { id: notificationId, emailsender: emailsender, email: email } });
    console.log("Payment logic goes here!");
  };

  const handleGoBack = () => {
    navigate('/messageone');
  };

  return (<>
  <ToastContainer/>
     <div className="min-h-screen flex flex-row gap-5 bg-gray-900 text-white-A700 p-6 mt-0">
     <div className="border-2 w-fit  m border-chocolate rounded-lg  p-7">
     <button onClick={handleGoBack} className="flex items-center border-2 mb-4 p-4 px-4 rounded-lg bg-gray-500 hover:bg-gray-300">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> */}
          Back
        </button>
        
        <div class="bg-white-A700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-blue-200">
      </div>
      <div class="p-6">
        <h2 class="text-xl font-bold text-gray-800 mb-2 font-quicksand">Basic Plan</h2>
        <p class="text-gray-600 mb-1 font-quicksand">Ideal for small businesses & individual</p>
        <p class="text-2xl font-bold text-gray-800 mb-2">₹299</p>
        <ul class="text-sm text-gray-600 mb-2">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            3 Transaction Free
          </li>
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Basic Features 
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            3% Transaction fee
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          class="w-full bg-blue-500  font-quicksand text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={()=>{navigate('/subscription')}}>
          Select Plan
        </button>
      </div>
    </div>
    <div class="bg-white-A700 rounded-lg overflow-hidden mt-2 shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-green-200">
      </div>
      <div class="p-8">
        <h2 class="text-xl font-bold text-gray-800 mb-2 font-quicksand">Pro Plan</h2>
        <p class="text-gray-600 mb-1 font-quicksand">Perfect for growing businesses</p>
        <p class="text-2xl font-bold text-gray-800 mb-2">₹699</p>
        <ul class="text-sm text-gray-600 mb-2">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            10 Transactions free 
          </li>
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Advanced ML Filtering & Features 
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            24/7 Support 
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800" onClick={() => {navigate("/subscription")}}>
          Select Plan
        </button>
      </div>
    </div>
</div>
    <div className="message-page-container border-2  w-[1056px] bg-gray-900 max-h-screen flex flex-col justify-between text-gray-900" >
    
      <div className="message-header px-4 py-2 text-white-A700  flex justify-between items-center border-b w-[100%] border-gray-700">
       
        <div className="flex items-center">
          <Img src={profileImage} alt="Profile Picture" className="h-14 w-14 rounded-full  mr-2" />
          {userEmail === email?( <span className="text-lg font-semibold">{emailsender}</span>):( <span className="text-lg font-semibold">{email}</span>)}
        </div>
        <div></div>
        
      </div>
      
      <div className="messages-container  overflow-hidden flex-grow">
       <Img src="images/Chat BG landscape.jpg" className={` z-50 absolute  w-[1035px] bg-gray-800  h-[640px] opacity-30` }></Img>
        {messages.map((message1, index) => (
          <div
            key={index}
            className={`message-container ${
              message1.emailsender === userEmail ? "justify-end" : "justify-start"
            } flex`}
          >
            <div className={`message ${
              message1.emailsender === userEmail ? "bg-blue-600" : "bg-gray-700"
            }   rounded-lg shadow-md first-letter:rounded-bl-none rounded-br-none p-3 m-3 mb-2 max-w-md text-white-A700`}
            >
              <span className="message-text break-all">{message1.message}</span>
              <span className="message-timestamp text-gray-900 text-sm block mt-1">
                {new Date(message1.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container px-4 py-2 flex w-[100%]items-center bg-gray-600 border-t border-gray-700">
        <button
          onClick={handlePayNow}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:border-blue-300 "
        >
          <span className="mr-1">$</span> Pay Now
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 min-w-0 focus:outline-none focus:ring focus:border-blue-300 text-black-900 px-3 py-2 border border-gray-600 ml-2   flex items-center bg-gray-50 rounded-lg dark:bg-gray-700"
        />
        <button onClick={handleSendMessage} class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg class="w-6 h-6 ml-3 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
      </div>
    </div></div></>
  );
};

export default MessageThree;