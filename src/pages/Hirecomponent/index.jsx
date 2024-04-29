import { TailwindCard } from 'pages/HomePageTwo'
import React,{ useState,useEffect } from 'react'
import { Img, Line, List, PagerIndicator, Slider, Text } from "components";
import {account,database,storage} from "services/appwrite"
import { useNavigate } from 'react-router-dom';
import { Query } from 'appwrite';
const Hirecomponent = () => {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  const [uniqueUsersData, setUniqueUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await database.listDocuments(
          process.env.REACT_APP_DB_ID,
          process.env.REACT_APP_COLLECTION_ID_TWO,[Query.limit(100)]
        );
        const rentUsersData = response.documents.filter(
          user => user.employeementstatus === 'Hired' && user.email && user.email.trim() !== ''
        );

        const uniqueUserEmails = rentUsersData.map(user => user.email);

        const userDataPromises = uniqueUserEmails.map(async email => {
          const response = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_ONE,[Query.limit(100)]
          );
          console.log(response);
          const userOne = response.documents.find(doc => doc.email === email);
          if (!userOne) return null; // Skip if user not found

          // Filter images based on email outside of listDocuments
          const profileResponse = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_FIVE,[Query.limit(100)]
          );
          console.log(profileResponse);
          const filteredImages = profileResponse.documents.filter(image => image.email === email);
          if (filteredImages.length === 0) return null; // Skip if no image found

          // Find the most recent image
          let latestImage = filteredImages.reduce((prev, current) =>
            new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
          );

          // Extract image ID from profileImageUrl
          const imageId = latestImage.imageURL.split('/').pop(); // Assuming the image URL is in the format of '.../images/imageId.jpg'

          // Get file preview from storage using imageId
          const filePreviewResponse = await storage.getFilePreview(
            process.env.REACT_APP_BUCKET_ID,
            imageId
          );
          const filePreviewUrl = filePreviewResponse.href; // Get the file preview URL

          return { ...userOne, profileImageUrl: filePreviewUrl };
        });

        const userData = await Promise.all(userDataPromises);
        setUniqueUsersData(userData.filter(user => user)); // Filter out null values
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsersData();
  }, []);
  
  const handleCardClick = (email) => {
    console.log('Email clicked:', email);
    navigate("/userprofileone", { state: { email } });
    // Implement your logic to use the email, such as opening a modal or sending an email
  }; 
  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-10 items-center justify-between max-w-[1402px] mt-8 mx-auto md:px-5 w-full `}>
        {/* Separate div for the grid */}
        <div className="grid grid-cols-5 gap-9 max-w-[1402px] mt-2.5 mx-auto md:grid-cols-3 sm:flex-col flex-row justify-center">
          {/* Rendering TailwindCard and Text components in separate divs */}
          {uniqueUsersData.map((user, index) => (
            <div key={`${user.email}_${index}`} className="mb-8  box-border p-4 shadow-lg hover hover:shadow-xl hover:bg-gray-300">
              {/* TailwindCard */}
              <div>
                <TailwindCard
                  key={`${user.email}_${index}`}
                  username={user.username}
                  aboutyou={user.abooutyou}
                  role={user.role}
                  profileImageUrl={user.profileImageUrl} // Pass profile image URL to the card
                  // Add more props here as needed for other data fields
                  onClick={() => handleCardClick(user.email)}
                />
              </div>
              {/* Text */}
              <div>
                <Text
                  key={index}
                  className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl overflow-hidden cursor-pointer"
                  size="txtQuicksandBold22"
                  onClick={() => handleCardClick(user.email)}
                >
                  <span className="text-gray-900 font-quicksand text-left font-semibold">
                    {user.username} 
                    <br />
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                    {user.abooutyou} {/* Typo in 'aboutyou'? */}
                    <br />
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                    {user.role}
                  </span>
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}
export default Hirecomponent