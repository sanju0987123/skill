import React, { useState,useEffect,useCallback } from "react";
import NewRent from "pages/NewRent";
import { Button, Img, Text } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "components/Header";
import { account,database,auth,storage } from "services/appwrite";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import {Mail,Link,MapPin,BriefcaseBusiness} from "lucide-react";
import Footer from "components/Footer";
import { Query } from "appwrite";
    
const UserProfileOnePage = ({ userEmail }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  
  const [current,setCurrent]=useState('');



  const handleLike = () => {
    // Toggle the like state
    setLiked(!liked);

    // Update the like count
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };
  const navigate=useNavigate();
  const location = useLocation();
  const Email=location.state.email 
  console.log(location.state.email);
  console.log(Email);
  
  const [imgurl,setimgurl]=React.useState();
  const [previewUrl, setPreviewUrl] = React.useState(null); // State to store the preview URL
  const [oldUrl,setOldUrl]=React.useState('');
  const [Email1,setEmail]=React.useState('');
  const [imageid,setImageId]=React.useState('');
  const [login,setLogin]=React.useState('');
  
 
  const [userData, setUserData] = useState({
      username: '',
      personalWebsiteLink: '',
      linkedin: '',
      abooutYou: '',
      role: '',
      skills: [],
      experience: null,
      timestamp: null,
      country: '',
      employmentStatus: '',
      email: '', // Rename email1 to email for clarity
      imageURL: "", // Include imageURL attribute to store the image URL
  });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchUserProfileImage = async () => {
      try {
        const storedSession = localStorage.getItem("session");
        
        if (storedSession) {
         // const sessionData = JSON.parse(storedSession);

         
          const userEmail = Email;
          setEmail(userEmail);
    
          const res = await database.listDocuments(
            process.env.REACT_APP_DB_ID,
            process.env.REACT_APP_COLLECTION_ID_FIVE,[Query.limit(100)]
          );
          
          // Sort documents based on createdAt attribute
          const sortedDocs = res.documents.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
    
          const userImageDoc = sortedDocs.find(doc => doc.email === userEmail);
          
          if (userImageDoc) {
            setImageId(userImageDoc.imageURL.substring(userImageDoc.imageURL.lastIndexOf("/") + 1));
            const previewUrl = await getFilePreview(userImageDoc.imageURL.substring(userImageDoc.imageURL.lastIndexOf("/") + 1));
            if (previewUrl) {
              setPreviewUrl(previewUrl);
              setOldUrl(previewUrl);
            } else {
              console.error('Preview URL is undefined or null');
            }
          } else {
            console.log('User image not found in database');
            setPreviewUrl(null); // Set previewUrl to null to show the "Upload Picture" prompt
          }
        } else {
          console.error('Session data not found in local storage');
        }
      } catch (error) {
        console.error('Error fetching user profile image:', error);
      }
    };
    
    fetchUserProfileImage();
  }, []); // Empty dependency array to run only once when component mounts
  
  const getFilePreview = async (imageId) => {
    try {
      const response = await storage.getFilePreview(
        process.env.REACT_APP_BUCKET_ID,
        imageId
      );
      
    setPreviewUrl(response.href); // Set the preview URL state
    setOldUrl(response.href);
      return response.href;
    } catch (error) {
      console.error('Error fetching file preview:', error);
      throw error;
    }
  };
  
  
  
  const getImageFromStorage = useCallback(async (fileId) => {
    try {
      // Fetch the image URL from storage using the fileId
      const response = await storage.getFilePreview(process.env.REACT_APP_BUCKET_ID_ONE, fileId);
      return response.href; // Return the resolved image URL
    } catch (error) {
      console.error("Error retrieving image from storage:", error);
      return ''; // Return empty string if image retrieval fails
    }
  }, []);
  useEffect((login1) => {
    const fetchUserData = async () => {
        try {
            const storedSession = localStorage.getItem("session");
            if (storedSession) {
                const sessionData = JSON.parse(storedSession);
                // const userEmail = sessionData.providerUid;
                let res = await account.get("current");
                console.log(res);
                console.log(res.email);
                login1=res.email;
                console.log(login1);
                setCurrent(res.email);
                console.log(current);
                setLogin(res.email);
                console.log(login);
              
                  const userEmail=Email;
                  console.log(userEmail);
                // Fetch all documents from the collections
                const resOne = await database.listDocuments(
                    process.env.REACT_APP_DB_ID,
                    process.env.REACT_APP_COLLECTION_ID_ONE,[Query.limit(100)]
                );
                const resTwo = await database.listDocuments(
                    process.env.REACT_APP_DB_ID,
                    process.env.REACT_APP_COLLECTION_ID,[Query.limit(100)]
                );
                const resThree = await database.listDocuments(
                    process.env.REACT_APP_DB_ID,
                    process.env.REACT_APP_COLLECTION_ID_TWO,[Query.limit(100)]
                );

                // Filter documents based on email in memory
                const userThree = resOne.documents.find(doc => doc.email === userEmail);
                const userTwo = resTwo.documents.find(doc => doc.email === userEmail);
                const userOne = resThree.documents.find(doc => doc.email === userEmail);

                // Update userData state with filtered data
                if (userThree && userTwo && userOne) {
                    setUserData({
                        username: userThree.username,
                        personalWebsiteLink: userThree.PersonalWebsiteLink,
                        linkedin: userThree.linkedin,
                        abooutyou: userThree.	abooutyou,
                        role: userTwo.role,
                        skills: userTwo.skills,
                        experience: userTwo.experience,
                        timestamp: userTwo.timestamp,
                        country: userOne.Country,
                        employeementstatus: userOne.employeementstatus,
                        email: userEmail,
                    
        
                    });
                }
            } else {
                console.error('Session data not found in local storage');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    const fetchPosts = async () => {
      try { 
        // Fetch posts based on user's email
        const resPosts = await database.listDocuments(
          process.env.REACT_APP_DB_ID,
          process.env.REACT_APP_COLLECTION_ID_FOUR,[Query.limit(100)]
        );
        console.log(resPosts);
        const userPosts = resPosts.documents.filter((post) => post.email === Email);
        
        // Fetch image URLs for each post and update posts state
      const postsWithImages = await Promise.all(userPosts.map(async (post) => {
        if (post.image) {
          const imageUrl = await getImageFromStorage(post.image.substring(post.image.lastIndexOf("/") + 1));
          return { ...post, imageUrl }; // Add imageUrl property to post object
        }
        return post;
      }));


      setPosts(postsWithImages); // Update posts state with image URLs
       
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchUserData();
    fetchPosts();
}, [userEmail,login, getImageFromStorage]);

  const handleRent = () => {
    console.log(Email);
    console.log(current);
    if (Email === current) {
      // alert("You cannot rent yourself");
      toast.error('YOU CANNOT RENT YOURSELF');
    }
    else
    {
      navigate("/NewRent",{state:{email:Email}});
    }
  };
  const handleHire = () => {
    console.log(Email);
    console.log(current);
    if (Email === current) {
      // alert("You cannot hire yourself");
      toast.warning('YOU CANNOT HIRE YOURSELF');
    }
    else
    {
      navigate("/hireform",{state:{email:Email}});
    }
  };



  return (
    <>
    <ToastContainer/>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[86px] w-full">

        <div className="flex flex-col justify-start w-full">
 
          <div className="flex flex-col md:px-5 relative w-full">
          <Header className=" absolute flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full z-40 " />
            <Img
              className="h-[368px] mx-auto object-cover w-full top-0"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
            <Img
              className="h-[197px] mb-auto ml-[60px] mt-[-98px] rounded-[50%] w-[197px] z-[1]"
              src=  {previewUrl}
              alt="imageFortyFour"
            />
            <div className="flex flex-col gap-[19px] items-start justify-start ml-auto mr-[87px] mt-[-NaNpx] w-[73%] z-[1]">
            <div className=" mt-3 ml-72 w-fit">  <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-[600px]  sm:ml-[0] sm:mt-0 text-center text-lg hover  hover:bg-black-900 hover:text-white-A700"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                  onClick={handleRent}
                  >
                
                  Rent{" "}
                </Button>
                <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-2 sm:ml-[0] sm:mt-0  text-center text-lg  hover  hover:bg-black-900 hover:text-white-A700"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                  onClick={handleHire}
                >
                  Hire{" "}
                </Button></div>    </div> </div>
              <div className="ml-[95px] mt-[-25px] w-[65%] ">
          <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRamaraja30"
                >
                  <span className="text-gray-900 font-ramaraja text-5xl text-left font-normal">
                    <>
                     {userData.username}
             
                    </>
                  </span></Text>
                  <div className="text-gray-900 font-ramraja mt-[-10px] text-left text-lg font-semibold mr-1">
                  {userData.role}
                  |<span className="font-semibold  ml-1">{userData.skills.join('|')}{" "}</span>
                  </div>
                  <div className="flex flex-row gap-[25px]  max-w-5xl left-0  md:ml-[0]  mt-[24px] md:px-5 w-[20%] md:w-full">
           
           <div className="text-gray-900 flex font-quicksand text-left w-fit font-normal pr-2 text-xl border-2 box-border rounded-md">
          <Mail className="mr-3 h-5 mt-1 text-gray-700"/> {userData.email}
           </div>
      
             <div className="text-gray-900 flex font-quicksand text-left w-fit font-normal pr-2 text-xl border-2 box-border rounded-md">
               <MapPin className="mr-3 text-gray-700 mt-1 h-5"/>{userData.country}
             </div>
         
          
             <div className="text-gray-900  flex w-fit font-quicksand text-left border-2 box-border pr-2 text-xl r rounded-md font-normal">
              <Link className="mr-3 text-gray-700 mt-1 h-5"/>{userData.employeementstatus}
             </div>
      
            
              
             <div className="text-gray-900  flex w-fit font-quicksand text-left border-2 box-border pr-2 text-xl r rounded-md font-normal">
             <BriefcaseBusiness className="mr-3 text-gray-700 mt-1 h-5"/>
            {userData.experience}Years
              </div>
            
         </div>
      
                
                
                <Text
              className="text-gray-900 mt-5 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
               <div className="text-gray-900 max-w-2xl font-quicksand text-left text-2xl mt-8 font-bold">About  </div>  
            <div className="text-gray-900 max-w-2xl font-quicksand text-left text-xl whitespace-normal" 
               
              >
               {userData.abooutyou}
              </div>
       
              <div className="text-gray-900 font-quicksand mt-8 text-left text-2xl font-bold">
                <>
                Other Links
                  <br />
                </>
              </div>
              <div className="text-gray-900 font-quicksand text-left font-normal flex ">
              <h1 className="font-quicksand font-semibold text-gray-900 mr-3">Portfolio :-</h1> <Text className="font-quicksand font-semibold text-gray-900" >{userData.personalWebsiteLink}</Text>
              </div>
              <div className="text-gray-900 flex  font-quicksand text-left font-normal w- fit ">
              <h1 className="font-quicksand font-semibold text-gray-900 mr-3">Linkedin :-</h1> <Text className="font-quicksand font-semibold text-gray-900" >{userData.linkedin}</Text>
            </div>
            </Text>
       
            </div>
        </div>
      </div>

      <h1 class="text-4xl font-bold ml-[90px] mt-[-40px] font-quicksand text-gray-900 my-8">My Work</h1>









      <div className=" ml-[90px] max-w-5xl  mt-3 ">
      {posts.map((post) => (
        <div key={post.$id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden mb-8  ">
          {/* User Profile */}
          <div className="px-6 py-4 border-b border-gray-300 bg-white">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"  
                src={previewUrl} // Assuming profile picture URL is available in userData
                alt="User profile"
              />
              <div>
                <p className="text-gray-600 text-xl font-quicksand font-bold">{userData.username}</p>
                <p className="text-gray-90000 text-sm">{userData.bio}</p> {/* Assuming bio is available in userData */}
              </div>
            </div>
          </div>

          {/* Post */}
          <div className="relative">
            {/* Render post image using an <img> element */}
            {post.imageUrl && (
              <img
                className="w-full h-[550px] object-cover   object-center"
                src={post.imageUrl}
                alt={`Post ${post.$id}`}
              />
            )}

            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-40 py-2 px-4 text-gray-800 text-lg font-semibold">
              {post.author} {/* Assuming author name is available in post data */}
            </div>
          </div>
          <div className="px-6 py-4 bg-white">
            <p className="text-gray-700 font-quicksand font-bold text-base">{post.text}</p>
            {/* Like Button */}
            <div className="flex items-center mt-4">
              <button onClick={handleLike}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${liked ? 'text-blue-500' : 'text-gray-900'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v5z"
                  />
                </svg>
              </button>
              <span className="text-gray-900">{likeCount} likes</span>
            </div>
            {/* Additional post details */}
          </div>
        </div>
      ))}
    </div>
    <Footer className="bg-gray-900 flex items-center justify-center mt-11 md:px-5 w-full" />
    </>
  );
};

export default UserProfileOnePage;