import React,{useState,useEffect} from "react";
import {nav} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Img, Text,Button } from "components";
import { account,database,query,storage } from "services/appwrite";
import { Query } from "appwrite";
import SearchResultsList from "../../components/SearchBar/SearchResultsList"
import Fuse from 'fuse.js';


const Header = (props) => {
  const navigate=useNavigate();
  const handle = useCallback(() => {
    console.log("hello")
    navigate("/notificationtwo");
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const fuseOptions = {
    keys: ['username', 'role'],
    threshold: 0.4, // Adjust threshold as needed
  };

  const [imgurl,setimgurl]=React.useState();
  const [previewUrl, setPreviewUrl] = React.useState(null); // State to store the preview URL
  const [oldUrl,setOldUrl]=React.useState('');
  const [Email,setEmail]=React.useState('');
  const [imageid,setImageId]=React.useState('');
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get current user's data
        const res1 = await account.get("current");
        const userEmail=res1.email;
        console.log(userEmail);
        
        const res = await database.listDocuments(
          process.env.REACT_APP_DB_ID,
          process.env.REACT_APP_COLLECTION_ID_FIVE,[Query.limit(100)]
        );
        console.log(res);
        
        // Sort documents based on createdAt attribute
        const sortedDocs = res.documents.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
  
        const userImageDoc = sortedDocs.find(doc => doc.email === userEmail);
        console.log(userImageDoc);
        
        if (userImageDoc) {
          setImageId(userImageDoc.imageURL.substring(userImageDoc.imageURL.lastIndexOf("/") + 1));
          const previewUrl = await getFilePreview(userImageDoc.imageURL.substring(userImageDoc.imageURL.lastIndexOf("/") + 1));
          console.log(previewUrl);
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
      

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);





  const handleSearch = async () => {
    try {
      // Fetch all documents from the collection
      const response = await database.listDocuments(
        process.env.REACT_APP_DB_ID,
        process.env.REACT_APP_COLLECTION_ID,[Query.limit(100)]
      );
  
      const fuse = new Fuse(response.documents, fuseOptions);
  
      // Perform fuzzy search on the data
      const searchResults = fuse.search(searchQuery);
  
      // Get the matched items from the search results
      const filteredResults = searchResults.map((result) => result.item);
  
      // Update search results state
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleSearch(); // Trigger search when Enter key is pressed
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
          className="rounded-full flex items-center justify-center"
          src={previewUrl}
          alt="User Profile"
        />
      );
    } else {
      return (
        <div className="rounded-full flex items-center justify-center">
         YOU
        </div>
      );
    }
  };



  return (
    <>
      <header className={props.className}>
        <div className="bg-gray-900_b2 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[18px] w-full">
          <a href="/HomePagetwo">
            <button
              className="md:mt-0 mt-[34px]  cursor-pointer text-3xl sm:text-[26px] md:text-[28px] font-bold text-deep_orange-A200   "
              size="txtQuicksandBold30"
            >
              SKILLSPHERE
            </button>
          </a>
          
          <div className="border border-solid border-white-A700 flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[81px] md:mt-0 mt-[22px] pl-1 py-1 rounded-[9px] w-[59%] md:w-full">
      <input
        type="text"
        className="ml-4 sm:ml-0 text-32px h-[56px] sm:text-lg text-white-A700 md:text-xl bg-transparent border-none outline-none focus:outline-none w-full"
        placeholder="What skills are you looking for today?"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Handle Enter key press
      />

      <Img
        className="h-[42px] md:h-auto  w-[46px] mr-2 cursor-pointer"
        src="images/img_searchicon.png"
        alt="searchicon"
        onClick={handleSearch} // Clicking icon triggers search (optional)
      />
            
          </div>
          
          <div className="h-[51px] md:ml-[0] ml-[55px] md:mt-0 mt-[25px] relative w-[4%] md:w-full">
            <Img
              className="h-[64px] m-auto ml-[0px]  cursor-pointer"
              src="images/img_maskgroup_51x47.png"
              alt="maskgroup"
              onClick={handle}
            />
            <div className="absolute bg-red-900 h-3 right-[17%] rounded-[50%] top-[23%] w-3"></div>
          </div>
          
          <a  href='/MessageOne'><Img
            className="h-[45px] md:h-auto md:ml-[0] ml-[45px] md:mt-0 mt-[34px] object-cover w-11"
            src="images/img_messageicon.png"
            alt="messageicon"
          /></a>
         <div className="md:h-[113px] h-[86px] mb-[27px] md:ml-[0] ml-[40px]  md:mt-0 mt-2.5 relative w-[5%] md:w-full">
         <a href="/userprofilethree" className="flex items-center justify-center">
            <div className="bg-gray-200 h-[67px] w-[67px] mt-3   hover:bg-black-900 hover:text-white-A700 rounded-full flex items-center justify-center">
            <Button className="text-xl font-bold ">{renderUserImage()}  </Button>
            </div>
        </a>
</div>
</div>
        
      </header>
      <SearchResultsList searchResults={searchResults}  /> 
    </>
  );
};

Header.defaultProps = {};

export default Header;