import React,{ useState,useEffect } from "react";

import { useNavigate,useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button, Img, Input, Line, Text } from "components";
import { account,database } from "services/appwrite";
import { v4 as uuidv4 } from 'uuid';


const SignUpThreePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [PersonalWebsiteLink, setPersonalWebsiteLink] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [abooutyou, setabooutyou] = useState("");
  const [userID, setUserID] = useState("");
  
  const { username = "", email = "" } = location.state || {};
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await account.get();
        setUserID(res.$id); // Assuming user ID is available in $id property
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    
    getCurrentUser();
  }, []);
  
  const handleSaveContinue = async () => {
    try {
      
      const userDataToStore = {
        PersonalWebsiteLink,
        linkedin,
        abooutyou,
        username,
        email
         // Include the username in the data to store
        
      };
      const documentId = uuidv4(); 

      // Store user data with the associated username
      const createDocumentResponse = await database.createDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID_ONE,documentId,
        {PersonalWebsiteLink:PersonalWebsiteLink,
          linkedin:linkedin,
          abooutyou:abooutyou,
      username:username,
      email:email
      
      }
      );
      console.log('Data saved successfully!',createDocumentResponse);

      navigate("/signupfour",{state:{username:username,email:email}});
    } catch (error) {
      console.error("Error storing user data:", username+error);
      toast.error('Error storing user data. Please try again.');
    }
  };
  return (
    <>
    <ToastContainer/>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-quicksand h-[850px] mx-auto p-8 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="flex flex-col gap-[53px] h-full justify-start ml-[7px] md:px-5 w-[88%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[57%] md:w-full">
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[143px]"
              onClick={() => navigate("/signuptwo")}
              leftIcon={
                <div className="mt-[18px] mb-[11px] mr-2.5 ">
                  <Img className="h-3" src="images/img_line10.svg" alt="Line 10" />
                </div>
              }
            >
              <div className="font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left text-white-A700">
                Go Back
              </div>
            </Button>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[66px] items-center justify-end md:ml-[0] ml-[339px] md:mt-0 mt-[19px] p-[15px] w-[66px]"
              style={{ backgroundImage: "url('images/img_group51.svg')" }}
            >
              <Text
                className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtQuicksandSemiBold25"
              >
                1
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-end md:ml-[0] ml-[98px] md:mt-0 mt-[18px] p-4 w-[68px]"
              style={{ backgroundImage: "url('images/img_group51.svg')" }}
            >
              <Text
                className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtQuicksandSemiBold25"
              >
                2
              </Text>
            </div>
          </div>
          <div className="flex md:h-[1114px] h-[653px] md:ml-[0] ml-[97px] relative w-[93%] md:w-full">
            <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
            <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[18px] w-full" style={{paddingLeft:"1rem"}}>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-[98%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[122px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtQuicksandRegular18"
                    >
                      Personal Website Link (if any)
                    </Text>
                    <Input
                      name="rectangleNineteen"
                      placeholder=""
                      className="p-0 w-full rounded-lg"
                      value={PersonalWebsiteLink}
                      onChange={(e) => setPersonalWebsiteLink(e.target.value)}
                      wrapClassName="flex h-12 mt-0.5 w-full"
                      shape="round"
                    ></Input>
                    <Text
                      className="mt-[41px] text-gray-500 text-lg"
                      size="txtQuicksandRegular18"
                    >
                      Linkedin Profile Link (if any)
                    </Text>
                    <Input
                      name="rectangleTwenty"
                      placeholder=""
                      className="p-0 w-full rounded-lg"
                      value={linkedin}
                      onChange={(e) => setlinkedin(e.target.value)}
                      
                      wrapClassName="flex h-12 mt-0.5 w-full"
                      shape="round"
                    ></Input>
                    <Text
                      className="mt-10 text-gray-500 text-lg"
                      size="txtQuicksandRegular18"
                    >
                 About You(Bio)
                    </Text>
                    <Input
                      name="rectangleTwentyOne"
                      placeholder=""
                      className="p-0 w-full rounded-lg"
                      value={abooutyou}
                      onChange={(e) => setabooutyou(e.target.value)}
                      
                      wrapClassName="flex h-12 mt-[3px] w-full"
                      shape="round"
                    ></Input>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[169px] mt-9 mx-auto rounded-[22px] text-center text-lg hover hover:bg-black-900 hover:text-white-A700"
                    onClick={handleSaveContinue}
                    color="gray_500"
                    size="md"
                    variant="fill"
                  >
                    Save & Continue
                  </Button>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[114px] mt-[9px] text-lg text-red-900"
                  >
                    <Text size="txtQuicksandMedium18">
                      <span className="text-gray-900 font-quicksand text-left font-medium">
                        Already have an account?
                      </span>
                      <span className="text-red-900 font-quicksand text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-deep_orange-A200 font-quicksand text-left font-semibold cursor-pointer"
                        onClick={() => navigate("/signin")} // Navigate to SigningPage
                      >
                      Sign In
                    </span>
                    </Text>
                  </a>
                </div>
                <Img
                  className="h-[621px] md:h-auto object-cover rounded-br-[18px] rounded-tr-[18px]"
                  src="images/img_30847931.png"
                  alt="30847931"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row items-start justify-start md:px-5 right-[36%] top-[6%] w-[24%]">
          <Line className="bg-gray-900 h-0.5 mb-[30px] mt-[35px] w-[29%]" />
          <Line className="bg-gray-900 h-0.5 mb-[30px] ml-[68px] mt-[35px] w-[30%]" />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[67px] items-center justify-end ml-1 p-4 w-[67px]"
            style={{ backgroundImage: "url('images/img_group49.svg')" }}
          >
            <Text
              className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
              size="txtQuicksandSemiBold25"
            >
              3
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpThreePage;
