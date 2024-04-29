
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { database, account,storage } from "services/appwrite";
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Query } from "appwrite";
const MessageOne = () => {
  const location = useLocation();
  const [chatUsers, setChatUsers] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [isEmailLoaded, setIsEmailLoaded] = useState(false); // Track email loaded state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        let res = await account.get("current");
        setUserEmail(res.email);
        setIsEmailLoaded(true); // Set email loaded state to true

        const result = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_SEVEN,[Query.limit(100)]);
        let filteredUsers = result.documents.filter((user) => {
          return user.notificationStatus === "accepted";
        });

        // Filter based on logged-in user's email or sender's email
        filteredUsers = filteredUsers.filter((user) => {
          return user.email === res.email || user.emailsender === res.email;
        });
        console.log(filteredUsers);
          // Fetch profile image URLs for each user from collection five
        for (let user of filteredUsers) {
          const imageResponse = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_FIVE,[Query.limit(100)]
          );
          const filteredImage = imageResponse.documents.filter(
            image => ((image.email!==userEmail)&&(image.email === user.email || image.email === user.emailsender) )
          );
                    // Find the most recent image
                    let latestImage = filteredImage.reduce((prev, current) =>
                    new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
                  );
        
                  // Extract image ID from profileImageUrl
                  const imageId = latestImage.imageURL.split('/').pop(); // Assuming the image URL is in the format of '.../images/imageId.jpg'
                  console.log(imageId);
        
          if (imageId) {

            const filePreview = await storage.getFilePreview(process.env.REACT_APP_BUCKET_ID,imageId); // Fetch file preview using image ID
            console.log(filePreview.href);
            user.profileImage = filePreview.href; // Store file preview in the user object
          } else {
            user.profileImage = "default.png"; // Use default image URL if profile image not found
          }
        }
        

        setChatUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching chat users:", error);
      }
    };

    if (!isEmailLoaded) {
      fetchChatUsers(); // Fetch users only if email is not loaded
    }
  }, [userEmail, isEmailLoaded]); // Run useEffect whenever userEmail or isEmailLoaded changes

  const handleChatSelection = (user) => {
    
    navigate("/messagethree", {
      state: {
        email: user.email,
        emailsender: user.emailsender,
        notificationId: user.notificationId,
        profileImage:user.profileImage

      }
    });
  };

  const handleBack = () => {
    navigate("/homepagetwo");
  };

  const handleSendMessage = (user) => {
    // Dummy logic to simulate sending a message
    console.log(`Sending message to ${user.emailsender}`);
  };

  return (
    
    <div className="min-h-screen flex flex-row gap-5 bg-gray-900 text-white-A700 p-6">
   

      <div className="w-[100%] mt-12 border-2 border-gray-400 rounded-lg  p-11">

        <div className="flex justify-between items-center mb-6">
        <button
            onClick={handleBack}
            className="px-5 py-3 bg-gray-500 text-white-A700 rounded-lg text-lg hover:bg-gray-600"
          >
            Back
          </button>
          <h1 className="text-2xl font-quicksand text-chocolate font-bold border-white-A700">Chat List</h1>
        
        </div>
        {isEmailLoaded && <p className="mb-4">Your Email: {userEmail}</p>}
        <ul>
          {chatUsers.map((user) => (
            <li
              key={user.notificationId}
              className="flex items-center justify-between bg-gray-800 rounded-lg p-4 mb-2 hover:bg-gray-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleChatSelection(user)}
            >
              <div className="flex items-center">
                <img src={user.profileImage} alt={user.username} className="w-12 h-12 rounded-full mr-4 shadow-lg" />
                <div>
                  <h3 className="font-semibold">{user.username}</h3>
                  {user.email === userEmail ? (
                    <p className="text-sm text-gray-400">{user.emailsender}</p>
                  ) : (
                    <p className="text-sm text-gray-400">{user.email}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleSendMessage(user)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
              >
                Send Message
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-2 w-fit  mt-12 m border-gray-400 rounded-lg  p-11">

      <StarRating totalStars={5} />
</div>
    </div>
  );
};

export default MessageOne;



const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [review, setReview] = useState('');
  const [userEmail,setUserEmail]=useState('');
  useEffect(() => {
    const fetchChatUsers = async () => {
      try{
        let res = await account.get("current");
        setUserEmail(res.email);
      }
      catch(error)
      {
        console.log(error);
      }
      
      }
        fetchChatUsers();
     },[]);
  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const handleMouseEnter = (starIndex) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  const handleSubmitReview=async ()=>{
    try{
   

    
      const currentdate=new Date().toISOString();
      console.log(currentdate);

    const res =await database.createDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_TWELVE,uuidv4(),
    {
      yourreview:review,
      Name:userName,
      email:userEmail,
      datetime:currentdate,
      stars:rating
    }
  )
  console.log(res);
}
  
  catch(error)
  {
    console.log(error);
  }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the rating, user name, and review to your backend or perform any other actions
    console.log(`Rating: ${rating}, User Name: ${userName}, Review: ${review}`);
    // Reset the form after submission
    setRating(0);
    setUserName('');
    setReview('');
  };

  return (<>
    <h1  className="md:mt-0 w-fit  text-2xl sm:text-[26px] md:text-[28px] font-semibold text-deep_orange-A200   ">SkillSphere 
    </h1>
    <div className="p-8 max-w-lg mx-auto bg-gray-500 mt-11 rounded-lg shadow-lg">
       
      <h1 className="text-3xl font-bold mb-6 text-center font-quicksand text-gray-700">Please Rate Our Website</h1>
      <marquee className="text-lg text-red-400 font-semibold font-quicksand mb-4" behavior="scroll" direction="left">
        Please rate our website, Your feedback is so valuable to us. Kindly take a look and help in finding the  bugs and error
      </marquee>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            className="w-full border text-black-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
            Your Review
          </label>
          <textarea
            id="review"
            className="w-full border text-black-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <FaStar
              key={starIndex}
              className={`text-4xl ${
                (hoverRating >= starIndex || rating >= starIndex) ? 'text-yellow-500' : 'text-gray-300'
              } cursor-pointer transition-colors duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStarClick(starIndex)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition-colors duration-200 ease-in-out block w-full mt-6"
          onClick={handleSubmitReview}
        >
          Submit
        </button>
      </form>
    </div></>
  );
};

export { StarRating};