import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <Img
              className="h-[188px] mx-auto object-cover w-full"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
            <Img
              className="h-[197px] mb-auto ml-[60px] mt-[-98px] rotate-[180deg] rounded-[50%] w-[197px] z-[1]"
              src="images/img_image44.png"
              alt="imageFortyFour"
            />
            <div className="flex flex-col gap-[19px] items-start justify-start ml-auto mr-[87px] mt-[-NaNpx] w-[73%] z-[1]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[45%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRamaraja30"
                >
                  <span className="text-gray-900 font-ramaraja text-left font-normal">
                    <>
                      Denis Kravets
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-lg font-normal">
                    UI/UX Designer | HTML | CSS{" "}
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] mb-[9px] min-w-[88px] ml-10 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  Rent{" "}
                </Button>
                <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-2 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Hire
                </Button>
              </div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                size="txtQuicksandMedium22"
              >
                Lorem ipsum dolor sit amet consectetur. Leo in laoreet tempor
                lectus neque sit nec. Sed consectetur risus sed enim bibendum
                malesuada. Vel tortor ut convallis risus enim tortor imperdiet
                et. Congue dolor sit odio quis massa.
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-start justify-center mb-[39px] ml-[71px] mt-[-NaNpx] w-[15%] z-[1]">
              <Img
                className="h-[23px] md:h-auto object-cover w-[23px]"
                src="images/img_maskgroup_42x42.png"
                alt="maskgroup_One"
              />
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Video Conferencing
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[311px] mt-[19px] text-gray-900 text-lg"
            size="txtQuicksandRegular18Gray900"
          >
            <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
              <>
                Email ID
                <br />
              </>
            </span>
            <span className="text-gray-900 font-quicksand text-left font-normal">
              rishita22@gmail.com
            </span>
          </Text>
          <div className="flex flex-row gap-[65px] items-center justify-start md:ml-[0] ml-[311px] mt-[19px] md:px-5 w-[18%] md:w-full">
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Country
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                India
              </span>
            </Text>
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Here to get
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                Both
              </span>
            </Text>
          </div>
          <div className="flex flex-row gap-[35px] items-center justify-start md:ml-[0] ml-[311px] mt-[19px] md:px-5 w-1/4 md:w-full">
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Portfolio Link
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                rishitadhar.dorik.ioo
              </span>
            </Text>
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Work Experience
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                4 Years
              </span>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[311px] mt-[19px] text-gray-900 text-lg"
            size="txtQuicksandRegular18Gray900"
          >
            <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
              <>
                Linkedin Link
                <br />
              </>
            </span>
            <span className="text-gray-900 font-quicksand text-left font-normal">
              rishitadhar.dorik.ioo
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
