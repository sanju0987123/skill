import React from "react";

import { useNavigate,useLocation } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const SignUpOnePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { username = "", email = "" } = location.state || {};

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-quicksand h-[900px] mx-auto p-8 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="flex flex-col gap-[53px] h-full justify-start ml-[7px] md:px-5 w-[88%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[57%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[21%] md:w-full">
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[143px]"
              onClick={() => navigate("/signupfour")}
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
          <div className="flex h-[653px] md:h-[882px] md:ml-[0] ml-[97px] relative w-[93%] md:w-full">
            <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
            <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] p-4 items-end justify-center m-auto  rounded-[18px] w-full" >
              <div className="flex md:flex-col flex-row gap-11 items-start justify-end w-[94%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[119px] justify-start md:mt-0 mt-[178px] w-[46%] md:w-full">
                  <div className="font-ramaraja md:h-[100px] h-[166px] relative w-full">
                    <Img
                      className="absolute h-[100px] left-[34%] object-cover top-[0] w-[100px]"
                      src="images/img_image38.png"
                      alt="imageThirtyEight"
                    />
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-max"
                      size="txtRamaraja40"
                    >
                      <span className="text-gray-900 font-ramaraja text-left font-normal">
                        You have{" "}
                      </span>
                      <span className="text-green-700 font-ramaraja text-left font-normal">
                        completed
                      </span>
                      <span className="text-gray-900 font-ramaraja text-left font-normal">
                        {" "}
                        your profile!
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold font-quicksand leading-[normal] min-w-[169px] md:ml-[0] ml-[132px] mr-[185px] rounded-[22px] text-center text-lg"
                    onClick={() => navigate("/SignIn",{state:{username:username,email:email}})}
                    color="gray_900"
                    size="md"
                    variant="fill"
                  >
                    Save & Continue
                  </Button>
                </div>
                <Img
                  className="h-[621px] sm:h-auto object-cover rounded-br-[18px] rounded-tr-[18px] w-1/2 md:w-full"
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
            style={{ backgroundImage: "url('images/img_group51.svg')" }}
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

export default SignUpOnePage;
