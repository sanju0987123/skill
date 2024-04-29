import React,{useEffect} from "react";
import UserSidebar from "components/UserProfile/UserSidebar";
import { useNavigate, useParams } from "react-router-dom";
import 'components/UserProfile/UserProfile.css'
import { Button, Img, Text } from "components";
import Header from "components/Header";
import AccountSetting from "components/UserProfile/AccountSettings";
import { InputText } from "primereact/inputtext";
import UserAddress from "components/UserProfile/UserAddress";
import ChangePassword from "components/UserProfile/ChangePassword";
import { useState } from "react";
import {Dialog} from 'primereact/dialog';
import AvatarEditor from "react-avatar-editor";
import { account,database,storage } from "services/appwrite";
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
import PostForm from "pages/postform";
import { Query } from "appwrite";
import Footer from "components/Footer";

 
import {Mail,Link,MapPin,BriefcaseBusiness,LogOut,UserRoundPlus} from "lucide-react";
const UserProfileThree = () => {
  const [showContent, setShowContent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (postData) => {
    console.log(postData);
    setShowForm(false); // Close the form after posting
  };
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const navigate = useNavigate();
  const { activepage } = useParams();
  const [visible, setVisible] = React.useState(false);
  const [originalImage, setOriginalImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [editor, setEditor] = React.useState(null);
  const [imgurl,setimgurl]=React.useState();
  const [previewUrl, setPreviewUrl] = React.useState(null); // State to store the preview URL
  const [oldUrl,setOldUrl]=React.useState('');
  const [Email,setEmail]=React.useState('');
  const [imageid,setImageId]=React.useState('');
  const [userData, setUserData] = React.useState({
    username: '',
    personalWebsiteLink: '',
    linkedin: '',
    abooutyou: '',
    role: '',
    skills: [],
    experience: null,
    timestamp: null,
    country: '',
    employeementstatus: '',
    email: '',
    imageURL: '',
  });
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedSession = localStorage.getItem("session");
        console.log(storedSession);
        if (storedSession) {
          const sessionData = JSON.parse(storedSession);
          const userEmail = sessionData.providerUid;
          setEmail(userEmail);
         console.log(userEmail)
        // Fetch user data from different collections based on email
        const resOne = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ONE,[Query.limit(100)]);
        const resTwo = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID,[Query.limit(100)]);
        const resThree = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_TWO,[Query.limit(100)]);
          console.log(resTwo);
          console.log(resOne);
          console.log(resThree);
        // Filter documents based on email
        const userThree = resOne.documents.find(doc => doc.email === userEmail);
        const userTwo = resTwo.documents.find(doc => doc.email === userEmail);
        const userOne = resThree.documents.find(doc => doc.email === userEmail);
        // console.log(userOne);
        console.log(userTwo);
        // console.log(userThree);

        // Update userData state with filtered data
        if (userThree && userTwo && userOne) {
          setUserData({
            username: userThree.username,
            personalWebsiteLink: userThree.PersonalWebsiteLink,
            linkedin: userThree.linkedin,
            abooutyou: userThree.abooutyou,
            role: userTwo.role,
            skills: userTwo.skills,
            experience: userTwo.experience,
            timestamp: userTwo.timestamp,
            country: userOne.Country,
            employeementstatus: userOne.employeementstatus,
            email: userEmail,
          });
        }
        console.log(userData);
      } else {
        console.error('Session data not found in local storage');
      }
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    

    fetchUserData(); // Call fetchUserData on component mount
  }, []); // Empty dependency array to run only once when component mounts
  
  useEffect(() => {
    const fetchUserProfileImage = async () => {
      try {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
          const sessionData = JSON.parse(storedSession);
          const userEmail = sessionData.providerUid;
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
  

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setOriginalImage(imageUrl);
    setVisible(true);
  }

  const updateImageInStorage = async (imageData) => {
    try {
      const blob = await fetch(imageData).then((res) => res.blob());
      const file = new File([blob], 'profile_image.png', { type: blob.type });
      const response = await storage.createFile(
        process.env.REACT_APP_BUCKET_ID,
        uuidv4(),
        file
      );
      return response.$id;
    } catch (error) {
      console.error('Error updating image in storage:', error);
      throw error;
    }
  };
  const updateImageInStorage2 = async (imageData) => {
    try {
      const blob = await fetch(imageData).then((res) => res.blob());
      const file = new File([blob], 'profile_image.png', { type: blob.type });
      const response = await storage.createFile(
        process.env.REACT_APP_BUCKET_ID_ONE,
        uuidv4(),
        file
      );
      return response.$id;
    } catch (error) {
      console.error('Error updating image in storage:', error);
      throw error;
    }
  };

  const handleSave = async () => {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const imageData = canvasScaled.toDataURL();
      setCroppedImage(imageData);

      try {
        const imageId = await updateImageInStorage(imageData);
        setImageId(imageId);

        const storageUrl = 'https://example.com/storage/';
        const imageUrl = storageUrl + imageId;
        setUserData(prevUserData => ({ ...prevUserData, imageURL: imageUrl }));
        const response = await database.createDocument(
          process.env.REACT_APP_DB_ID,
          process.env.REACT_APP_COLLECTION_ID_FIVE,
          uuidv4(),
          { email: userData.email, imageURL: imageUrl, createdAt: new Date().toISOString() }
        );
        console.log('Profile image saved successfully:', response);
        const previewUrl = await getFilePreview(imageId);
        setPreviewUrl(previewUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };


  const savePost = async (text, imageUrl, userEmail) => {
    try {
     
      const data = {
        'email': userEmail,
        'text': text,
        'image': 'https://example.com/images/'+imageUrl,
        'createdAt': new Date().toISOString(),
      };
      
      
      console.log(data);
      const res23=await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_FOUR, uuidv4(), data);
      console.log('Post saved successfully',res23);
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handlePostSubmit = async (postData) => {
    const { text, image } = postData;
    try {
      if (image) {
        const imageUrl = await updateImageInStorage2(image);
        await savePost(text, imageUrl, userData.email);
      } else {
        await savePost(text, '', userData.email);
      }
    } catch (error) {
      console.error('Error handling post submission:', error);
    }
  };
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
  const renderUserImage = () => {
    console.log(previewUrl)
    if (previewUrl) {
      return (
        <Img
        className="h-[197px] mb-auto  ml-[226px] mt-[-98px] rounded-[50%] w-[197px] z-[1]"
        src=  {previewUrl}
        alt="imageFortyFour"
      />
      );
    } else {
      return (
        <div className="h-[197px] mb-auto ml-[60px] mt-[-98px] rounded-[50%] w-[197px] z-[1]">
          Please insert profile picture
        </div>
      );
    }
  };

  const logout = async () => {
    try {
      let res = await account.deleteSession("current")
      navigate('/landing')
    } catch (err) {
      console.log(err)
    }
  };
 
  const footer = (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );

  
   
 
  return (<>
    <section className="bg-gray-200 w-[100%]">
      
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[86px] w-full">

<div className="flex flex-col justify-start w-full">

  <div className="flex flex-col md:px-5 relative w-full">
  <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] md:px-5 w-[11%] md:w-full "  >
          <Button
            className=" absolute common-pointer bg-transparent cursor-pointer flex items-center  justify-center min-w-[153px]"
            onClick={() => navigate("/homepagetwo")}
            leftIcon={
              <div className="mt-[136px] mb-[11px] ml-0 ">
                <Img className="h-3 mb-6" src="images/img_line10.svg"  alt="Line 10" />
              </div>
            }
          >
            <div className=" absolute font-bold leading-[normal] md:text-[23px] sm:text-[21px] w-[100px] text-[25px] mt-[118px]  ml-[155px] text-left mb-5 text-white-A700">
              Go Back
            </div>
          </Button>
        </div>
        
    <Img
      className="h-[320px] mx-auto object-cover w-full top-0"
      src="images/newprof.png"
      alt="imageFortyThree"
    />
 
        

<div className="flex  justify-center items-center flex-row">
    <div>
     
      <Dialog visible={visible} onHide={() => setVisible(false)} footer={footer}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {originalImage && (
          <AvatarEditor
            ref={(ref) => setEditor(ref)}
            image={originalImage}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1}
            rotate={0}
            borderRadius={125}
          />
        )}
      </Dialog>
      {(croppedImage && (
      
       renderUserImage())||  (renderUserImage())
      )}
    
         
         
           <Text
                  className="text-3xl mt-3 text-center sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRamaraja30"
                >
                  <span className="text-gray-900 font-ramaraja text-5xl  font-normal text-center">
                    <>
                     {userData.username}
             
                    </>
                  </span></Text>
                  <div className="text-gray-900 font-ramraja mt-[-10px] text-center text-lg font-normal mr-1">
                  {userData.role}
                  |<span className="font-normal ml-1">{userData.skills.join('|')}{" "}</span>
                  </div>
                  <div className="flex flex-row gap-[25px]  max-w-5xl left-0  md:ml-[0]  mt-[10px] md:px-5 w-[20%] md:w-full">
           
          
                  <div className="text-gray-900  flex w-fit font-quicksand text-left border-2 box-border pr-2 text-xl r rounded-md  font-normal">
              <Link className="mr-3 text-gray-700 mt-1 h-5"/>{userData.employeementstatus}
             </div>
      
             <div className="text-gray-900 flex font-quicksand text-left w-fit font-normal pr-2 text-xl border-2 box-border rounded-md">
               <MapPin className="mr-3 text-gray-700 mt-1 h-5"/>{userData.country}
             </div>
         
          
            
            
              
             <div className="text-gray-900  flex w-fit font-quicksand text-left border-2 box-border pr-2 text-xl r rounded-md font-normal">
             <BriefcaseBusiness className="mr-3 text-gray-700 mt-1 h-5"/>
            {userData.experience}Years
              </div>
              <div className="text-gray-900 flex font-quicksand text-left w-fit font-normal pr-2 text-xl border-2 box-border rounded-md">
          <Mail className="mr-3 h-5 mt-1 text-gray-700"/> {userData.email}
           </div>
         </div> 
         <div className="flex flex-row gap-[25px]  max-w-5xl left-0  md:ml-[0]  mt-[24px] md:px-5 w-[20%] md:w-full">
          <div className="  flex ml-[14px]  mb-5 items-center justify-center mt-3 rounded-xl bg-gray-100 ">
         <button
        onClick={toggleForm}
        className="common-pointer cursor-pointer font-quicksand text-lg font-semibold leading-[normal] min-w-[108px]  sm:ml-[0] sm:mt-0  text-center ml-[10px] m-[2px]border-black-900 p-2 m-[2px]  rounded-xl  hover  hover:bg-black-900 hover:text-white-A700"
        shape="round"
        color="gray_900"
        size="sm"
        variant="outline"
      >
      Upload 
      </button>
      {showForm && (
        <div className=" absolute top-0 left-4 p-4">
          <PostForm onSubmit={handlePostSubmit} onClose={toggleForm} />
      </div>
    )}
  <div className="flex flex-row  gap-[20px]"><EditProfile />
          
                <button  onClick={() => setVisible(true)} className="font-quicksand text-lg hover:bg-gray-900    rounded-lg border-black-900  hover hover:text-white-A700 font-semibold  m-1  p-2">Edit</button>
                <button onClick={() => navigate('/contractlistpage')} className="  hover:bg-gray-900   rounded-xl border-black-900  hover hover:text-white-A700 font-quicksand text-lg font-semibold  m-1  p-2 cursor-pointer  ">Contract</button>
                <div className="text-gray-900 flex font-quicksand text-left w-fit font-normal hover m-[2px] hover:bg-gray-900  hover:text-white-A700 rounded-xl pr-2 text-xl">
          <LogOut className=" h-5 mt-4 text-gray-700"/><button
                  className=" p-2 text-white  hover hover:bg-gray-900  hover:text-white-A700  text-red-400 m-[2px] rounded-xl font-quicksand text-lg  font-semibold transition-colors duration-200 ease-in-out"
                  onClick={logout}
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Signout
                </button>  </div>
                </div></div>
                </div> 
        
    </div>
           
           
        </div>
</div>  


       <div className="ml-[95px]  w-[65%] ">
         
      
                
                
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

     </div>   </div>
</div>
            
    
       
    </section>
    
 
 </> 
  );
};

export default UserProfileThree;



const EditProfile = ( ) => {
 
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [abooutyou, setAbooutyou] = useState('');
  const [PersonalWebsiteLink, setPersonalWebsiteLink] = useState('');
  const [userEmail,setEmail]=useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [experience, setExperience] = useState(0);
  const [documentIdOne,setDocumentIdOne]=useState('');
  const [documentIdTwo,setDocumentIdTwo]=useState('');
  const [documentIdThree,setDocumentIdThree]=useState('');
 const navigate= useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedSession = localStorage.getItem("session");
        console.log(storedSession);
        if (storedSession) {
          const sessionData = JSON.parse(storedSession);
          const userEmail = sessionData.providerUid;
          setEmail(userEmail);
         console.log(userEmail);
       
        // Fetch data from respective tables
        const userDataOne = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ONE,[Query.limit(100)]);
        const userDataTwo = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID,[Query.limit(100)]);
        const userDataThree = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_TWO,[Query.limit(100)]);
        console.log(userDataOne);
        console.log(userDataTwo);
        console.log(userDataThree);
        console.log(userEmail);

        // Find user data based on email
        const userDataSignupOne = userDataOne.documents.find(doc => doc.email === userEmail);
        const userDataSignupTwo = userDataTwo.documents.find(doc => doc.email === userEmail);
        const userDataSignupThree = userDataThree.documents.find(doc => doc.email === userEmail);
        console.log(userDataSignupOne);
        console.log(userDataSignupTwo);
        console.log(userDataSignupThree);

        // Set state variables with retrieved data
        if (userDataSignupOne) {
          setAbooutyou(userDataSignupOne.abooutyou || '');
          setPersonalWebsiteLink(userDataSignupOne.PersonalWebsiteLink || '');
          setDocumentIdOne(userDataSignupOne.$id); // Save document ID for later use
        }
        if (userDataSignupTwo) {
          setExperience(userDataSignupTwo.experience || 0);
          setDocumentIdTwo(userDataSignupTwo.$id); // Save document ID for later use
        }
        if (userDataSignupThree) {
          setCountry(userDataSignupThree.Country || '');
          setStatus(userDataSignupThree.employeementstatus || '');
          setDocumentIdThree(userDataSignupThree.$id); // Save document ID for later use
        }
        console.log(documentIdOne);
        console.log(documentIdTwo);
        console.log(documentIdThree);
      } else {
        console.error('Session data not found in local storage');
      }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userEmail]);
  const handleButtonClick = () => {
    setShowProfile(true); // Show the EditProfile component when the button is clicked
  };
  const handleChangeAbooutyou = (e) => {
    setAbooutyou(e.target.value);
  };

  const handleChangePersonalWebsiteLink = (e) => {
    setPersonalWebsiteLink(e.target.value);
  };
  const handleCloseContent = () => {
    setShowModal(false);
  };
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeExperience = (e) => {
    setExperience(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(documentIdOne);
      console.log(documentIdTwo);
      console.log(documentIdThree);

      // Update profile in the appropriate table
      const update1=await database.updateDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_ONE,documentIdOne, {
        abooutyou: abooutyou,
        PersonalWebsiteLink: PersonalWebsiteLink
      });
      console.log(update1);
      const update2=await database.updateDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID,documentIdTwo, {
        experience: experience,
      });
      console.log(update2);
      const update3=await database.updateDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_TWO,documentIdThree,  {
        Country: country,
        employeementstatus: status
      });
      console.log(update3);
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    setShowModal(false);
  };

  

  return (
    <div>
      
    <button
      onClick={() => setShowModal(true)}
      className=" p-2 text-white font-quicksand text-lg font-semibold  ml-[20px]   hover:bg-gray-900   rounded-xl m-1 border-black-900  hover hover:text-white-A700   min-w-[138px] transition-colors duration-200 ease-in-out"
    >
      Edit Profile
    </button>
    {showModal &&
    <div className="fixed flex inset-0 flex-row bg-black-900 z-50">

      <div className="flex flex-col w-1/4  ">
        <div className="account-settings mt-[140px]">
          <h2 className="font-quicksand font-semibold ml-5 text-3xl  text-white-A700">Account Settings</h2>
          <p className="font-quicksand ml-5 mt-2 font-medium text-xl text-white-A700">Manage your connected experience and account settings here.</p>
          <button className="bg-white-A700 text-black-900 font-quicksand font-semibold ml-5 mt-5  px-11 py-3 rounded-lg justify-start">Personal Details</button>
          
        </div>
      </div>
      <div className="absolute mt-[50px] right-7 mr-9 cursor-pointer" onClick={() => setShowModal(false)}>
              <svg className="w-6 h-6 text-white-A700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
      {/* White line */}
      <div className='w-[0.1px] bg-white-A700'></div>

      <div className="flex flex-col w-3/4 mt-[100px] ml-11 relative ">
        <div className="edit-profile-form">
    
          <form onSubmit={handleSubmit} className="flex flex-wrap relative">

            {/* Cross symbol */}
           

            <div className="form-group w-full md:w-1/2 lg:w-1/3 flex mt-1 flex-col ">
              <div className='flex flex-col items-start mt-5'>
              <label htmlFor="abooutyou" className="font-quicksand font-semibold text-white-A700 mt-1  text-xl  mb-1">About You:</label>
              <textarea id="abooutyou" value={abooutyou} onChange={handleChangeAbooutyou} className="h-12 md:h-24 bg-black-900 text-white-A700 border border-white-A700 rounded-lg p-2 outline-none w-[900px]" />
              <div className='font-quicksand font-semibold text-white-A700 text-[0.70rem] '>Tell people about yourself</div>
        </div>

        <div className='flex flex-col items-start mt-5'>
              <label htmlFor="country" className="font-quicksand font-semibold text-white-A700 text-xl mb-1">Country:</label>
              <input type="text" id="country" value={country} onChange={handleChangeCountry} className="bg-black-900 text-white-A700 border border-white-A700 rounded-lg p-2 outline-none w-[900px]" />
              </div>
              <div className='font-quicksand font-semibold text-gray-300 text-[0.70rem] '>Show others your work and projects </div>

              <div className='flex flex-col items-start mt-5'>
              <label htmlFor="status" className="font-quicksand  font-semibold text-white-A700 text-xl mb-1">Here to get:</label>
              <select id="status" value={status} onChange={handleChangeStatus} className="bg-black-900 text-white-A700 border border-white-A700 rounded-lg p-2 outline-none w-[920px]">
                <option value="">Select</option>
                <option value="Rent">Rent</option>
                <option value="Hired">Hired</option>
              </select>
              <div className='font-quicksand font-semibold text-gray-300 text-[0.70rem] '>Here to get Hired,Rent or Both</div>
           
</div>
<div className='flex flex-col items-start mt-5 '>
<label htmlFor="PersonalWebsiteLink" className="font-quicksand font-semibold text-white-A700 text-xl  mb-1">Portfolio Link:</label>
<input type="text" id="PersonalWebsiteLink" value={PersonalWebsiteLink} onChange={handleChangePersonalWebsiteLink}  className="bg-black-900 text-white-A700 border border-white-A700 rounded-lg p-2 outline-none w-[900px]" />
              <div className='font-quicksand font-semibold text-white-A700 text-[0.70rem] '>Show others your work and projects </div>
           
</div>
{/* <div className='flex flex-col items-start mt-5'>
              <label htmlFor="otherLink" className="font-quicksand font-semibold text-white text-xl mb-1">Other Link:</label>
              <input type="text" id="otherLink" value={otherLink} onChange={(e) => setOtherLink(e.target.value)} className="bg-black text-white border border-white rounded-lg p-2 outline-none w-[900px]" />
              <div className='font-quicksand font-semibold text-white text-[0.70rem] '>Upload your any other work </div>
         </div> */}

<div className='flex flex-col items-start mt-5'>
         <label htmlFor="experience" className="font-quicksand font-semibold text-white-A700 text-xl mb-1">Work Experience:</label>
         <input type="text" id="experience" value={experience} onChange={handleChangeExperience} className="bg-black-900 text-white-A700 border border-white-A700 rounded-lg p-2 outline-none w-[900px]" />
              <div className=' left-3 font-quicksand font-semibold text-white-A700 text-[0.70rem]'>How many years of expertise do you have </div>
              </div>
              </div>
            <button type="submit" className="bg-white-A700 text-black-900 mt-9 ml-[840px] hover hover:text-white-A700 hover:bg-black-900  font-quicksand font-semibold px-5 py-3 rounded-lg  transition-colors duration-200 ease-in-out" onClick={handleSubmit}>Submit</button>
          
          </form>
        </div>
      </div> 
    </div>}
    </div>
  );
};

export {EditProfile};