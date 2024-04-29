  import React,{useEffect,useState} from "react";

  import { useNavigate,useLocation } from "react-router-dom";

  import { Button, Img, Input, Line, Text } from "components";
  import { account, database } from "services/appwrite";
  import { v4 as uuidv4 } from 'uuid';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const SignUpTwoPage = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState("");
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
        const timestamp=new Date().toISOString().slice(0, 19).replace('T', ' ');;
        const userDataToStore = {
          role,
          skills,
          username, // Include the username in the data to store
          experience,
          timestamp,
          email
        };
        const documentId = uuidv4(); 

        // Store user data with the associated username
        const createDocumentResponse = await database.createDocument(process.env.REACT_APP_DB_ID,process.env.REACT_APP_COLLECTION_ID,documentId,
          {role:role,
          skills:skills,
          username:username,
          experience:experience,
          timestamp:timestamp,
          email:email
        }
        );
      console.log(' sucess saved ', createDocumentResponse);

        navigate("/signupthree",{state:{username:username,email:email}});
      } catch (error) {
        console.error("Error storing user data:", username+error);
        toast.error('Error storing user data. Please try again.');
      }
    };

    
    return (
      <>
      <ToastContainer/>
        <div
          className="bg-cover bg-gray-900 bg-no-repeat font-quicksand h-[900px] mx-auto p-8 sm:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_signin.png')" }}
        >
          <div className="flex flex-col gap-[32px] h-full justify-start ml-[7px] md:px-5 w-[88%]">
            <div className="flex flex-row sm:gap-10 gap-[339px] items-start justify-start w-[44%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-[27%]">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[143px]"
                onClick={() => navigate("/Landing")}
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
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[66px] items-center justify-end mt-[19px] p-[15px] w-[66px]"
                style={{ backgroundImage: "url('images/img_group51.svg')" }}
              >
                <Text
                  className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtQuicksandSemiBold25"
                >
                  1
                </Text>
              </div>
            </div>
            <div className="flex md:h-[1139px] h-[653px] md:ml-[0] ml-[97px] relative w-[93%] md:w-full">
              <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
              <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[18px] w-full" style={{paddingLeft:"1rem"}}>
                <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between w-[98%] md:w-full">
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-gray-500  text-lg"
                        size="txtQuicksandRegular18"
                      >
                        <>
                          Role <br />
                          eg: UI/UX Designer
                        </>
                      </Text>
                      <Input
                        name="rectangleNineteen"
                        placeholder=""
                        className="p-0 w-full rounded-lg"
                        wrapClassName="flex h-12 mt-1 w-full"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        shape="round"
                      ></Input>
                      <Text
                        className="mt-4 text-gray-500 text-lg"
                        size="txtQuicksandRegular18"
                      >
                        <>
                          Skills <br />
                          you can add 8 skills <br />
                          ex: a,b,c
                        </>
                      </Text>
                      <Input
                        name="rectangleTwenty"
                        placeholder=""
                        className="p-0 rounded-lg w-full"
                        value={skills.join(",")}
                        onChange={(e) => setSkills(e.target.value.split(","))}
                        wrapClassName="flex h-12 mt-1 w-full"
                        shape="round"
                      ></Input>
                      <Text
                        className="mt-4 text-gray-500 text-lg"
                        size="txtQuicksandRegular18"
                      >
                        <>
                          Experience <br />
                          eg: 0-1 years
                        </>
                      </Text>
                      <Input
                        name="rectangleTwentyOne"
                        placeholder=""
                        className="p-0  rounded-lg  w-full"
                        value={experience}
                        onChange={(e) => setExperience (parseInt(e.target.value))}
                        wrapClassName="flex h-12 mt-1 w-full"
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
          <div className="absolute flex flex-row items-center justify-start md:px-5 right-[36%] top-[6%] w-[24%]">
            <Line className="bg-black-900 h-0.5 mb-[31px] mt-[35px] w-[30%]" />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-end p-4 w-[68px]"
              style={{ backgroundImage: "url('images/img_group49.svg')" }}
            >
              <Text
                className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtQuicksandSemiBold25"
              >
                2
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[67px] items-center justify-end ml-[97px] p-4 w-[67px]"
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

  export default SignUpTwoPage;
