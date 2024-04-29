import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";

const FrameTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-quicksand sm:gap-10 md:gap-10 gap-[30px] h-[900px] justify-start mx-auto p-8 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[7px] md:px-5 w-[11%] md:w-full">
          <Img className="h-0.5 cursor-pointer" src="images/img_line10.svg" alt="lineTen" />
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 cursor-pointer"
            size="txtQuicksandBold25WhiteA700"
          >
            Go Back
          </Text>
        </div>
        <div className="flex flex-col items-center mb-[42px] md:ml-[0] ml-[7px] mr-[105px] sm:pl-5 pl-[97px] md:px-5 w-[92%] md:w-full">
          <div className="flex md:h-[621px] h-[653px] relative w-full">
            <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
            <div className="absolute border-2 border-gray-900 border-solid md:h-[418px] sm:h-[422px] h-[653px] inset-[0] justify-center m-auto p-12 md:px-10 sm:px-5 rounded-[18px] w-full">
              <div className="absolute bottom-[15%] flex flex-col items-center justify-start left-[20%] w-[43%]">
                <div className="flex flex-col md:gap-10 gap-[87px] justify-start w-full">
                  <div className="md:h-[312px] h-[313px] mr-[179px] relative w-[64%]">
                    <div
                      className="common-pointer absolute border border-gray-900 border-solid bottom-[0] h-[273px] inset-x-[0] mx-auto rounded-[20px] w-full cursor-pointer"
                      onClick={() => navigate("/frame")}
                      ></div>
                    <Img
                      className="absolute h-[312px] inset-[0] justify-center m-auto object-cover w-4/5 cursor-pointer"
                      src="images/img_image5.png"
                      alt="imageFive"
                      onClick={() => navigate("/Frame")}
                      
                      />
                  </div>
                  <a className="md:ml-[0] ml-[211px] text-lg text-red-900">
                    <Text
                      className="common-pointer cursor-pointer"
                      size="txtQuicksandMedium18"
                      onClick={() => navigate("/signin")}
                      >
                      <span className="text-gray-900 font-quicksand text-left font-medium">
                        Already have an account?
                      </span>
                      <span className="text-red-900 font-quicksand text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-deep_orange-A200 font-quicksand text-left font-semibold">
                        Sign In
                      </span>
                    </Text>
                  </a>
                </div>
              </div>
              <div className="absolute md:h-[418px] h-[460px] right-[16%] top-[7%] w-[43%] sm:w-full">
                <div className="absolute bottom-[0] font-quicksand h-[418px] right-[0] w-[64%]">
                  <div className="absolute border border-gray-900 border-solid bottom-[15%] h-[273px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
                  <div className="absolute h-[418px] inset-[0] justify-center m-auto w-[94%]">
                    <Img
                      className="absolute h-[312px] inset-[0] justify-center m-auto object-cover w-4/5 cursor-pointer"
                      src="images/img_image6.png"
                      alt="imageSix"
                      onClick={() => navigate("/frameone")}
                      />
                    <Text
                      className="absolute bottom-[4%] inset-x-[0] mx-auto text-gray-900 text-lg w-max cursor-pointer"
                      size="txtQuicksandMedium18Gray900"
                      onClick={() => navigate("/frameone")}
                      >
                      Client
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute left-[0] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 top-[0]"
                  size="txtRamaraja40"
                  >
                  Specify your role
                </Text>
              </div>
              <Text
                className="absolute bottom-1/4 left-[29%] text-gray-900 text-lg cursor-pointer"
                size="txtQuicksandMedium18Gray900"
                onClick={() => navigate("/Frame")}
                
                >
                Skill Holder
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
