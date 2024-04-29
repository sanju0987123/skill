import React from "react";

import { useNavigate,useLocation } from "react-router-dom";

import { Img, Line, List, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HomePage21OnePage = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const { username }=location.state;
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="md:h-[1343px] h-[900px] md:px-5 relative w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_aerialshoturb.png"
              alt="aerialshoturb"
            />
            <div className="absolute bg-gray-900_8e flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[241px] w-full">
              <Header className="flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full" />
              <Text
                className="mt-[282px] md:text-5xl text-[90px] text-white-A700"
                size="txtRamaraja90"
              >
                Get Your Work Done Smoothly
              </Text>
              <div className="flex flex-row font-quicksand gap-[11px] items-start justify-center mt-[35px] w-[10%] md:w-full">
                <Text
                  className="text-gray-500 text-xl"
                  size="txtQuicksandMedium20"
                >
                  Swipe Down
                </Text>
                <Img
                  className="h-3.5 md:h-auto mt-[3px] object-cover w-3.5"
                  src="images/img_maskgroup_14x14.png"
                  alt="maskgroup_One"
                />
              </div>
            </div>
          </div>
          <div className="h-[198px] md:h-[216px] max-w-[1404px] mt-[18px] mx-auto md:px-5 relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-auto w-full"
              items={[...Array(4)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-gradient  flex flex-col items-center justify-start mx-2.5 md:pl-10 sm:pl-5 pl-[52px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[198px] relative w-full">
                        <Img
                          className="absolute h-[198px] inset-y-[0] my-auto object-cover right-[0] w-[34%]"
                          src="images/img_image14.png"
                          alt="imageFourteen"
                        />
                        <Text
                          className="absolute h-max inset-y-[0] left-[0] my-auto text-white-A700 text-xl"
                          size="txtQuicksandMedium20WhiteA700"
                        >
                          <>
                            Get Hired!
                            <br />
                            <br />
                            Work as a freelance and get hired! Embrace the
                            freedom to choose your projects, set your own
                            schedule, and showcase your skills to clients
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[11px] bg-white-A700 w-[11px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[11px] bg-gray-500_01 w-[11px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[4%] flex h-[11px] inset-x-[0] justify-center mx-auto w-[68px]"
              count={4}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[11px] bg-white-A700 w-[11px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[11px] bg-gray-500_01 w-[11px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[4.00px]"
              unselectedWrapperCss="inline-block mx-[4.00px]"
            />
          </div>
          <div className="flex flex-row gap-[25px] items-start justify-start md:ml-[0] ml-[18px] mt-9 md:px-5 w-[22%] md:w-full">
            <div className="flex flex-row gap-[25px] items-center justify-between mb-0.5 w-[48%]">
              <Text
                className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtQuicksandMedium30"
                onClick={() => navigate("/homepagetwo",{state:{username:username}})}
              >
                Rent
              </Text>
              <Text
                className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                size="txtQuicksandMedium30Gray500"
                onClick={() => navigate("/homepage22",{state:{username:username}})}
              >
                Hire
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-0.5 w-[45%]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtQuicksandMedium30"
              >
                Sort by
              </Text>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => console.log('Up arrow clicked')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => console.log('Down arrow clicked')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
            </div>
          </div>
          <Img
            className="h-1 md:ml-[0] ml-[27px] mt-1"
            src="images/img_line28.svg"
            alt="lineTwentyEight"
          />
          <Text
            className="md:ml-[0] ml-[18px] mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-600"
            size="txtQuicksandMedium25"
          >
            Developers
          </Text>
          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start md:ml-[0] ml-[18px] mt-3.5 md:px-5 w-[93%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[83%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-row gap-1.5 items-center justify-start p-[7px] rounded-[24px] w-[23%] md:w-full">
                <Text
                  className="ml-[5px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Website Developer
                </Text>
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Two"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row gap-1.5 items-center justify-center p-[7px] rounded-[24px] w-[24%] md:w-full">
                <Text
                  className="ml-[3px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Software Developer
                </Text>
                <Img
                  className="h-6 md:h-auto mr-[3px] object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Three"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-1/4 md:w-full">
                <Text
                  className="mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Application Developer
                </Text>
                <Img
                  className="h-6 md:h-auto ml-1 object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Four"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[22%] md:w-full">
                <Text
                  className="ml-[9px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Game Developer
                </Text>
                <Img
                  className="h-6 md:h-auto ml-[5px] mr-[9px] object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Five"
                />
              </div>
            </div>
            <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[15%] md:w-full">
              <Text
                className="ml-[11px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray500"
              >
                AI Developer
              </Text>
              <Img
                className="h-6 md:h-auto ml-1 mr-3 object-cover w-6"
                src="images/img_maskgroup_24x24.png"
                alt="maskgroup_Six"
              />
            </div>
          </div>
          <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[18px] mr-[1146px] mt-[27px] p-[7px] md:px-5 rounded-[24px] w-1/5 md:w-full">
            <Text
              className="ml-2 md:ml-[0] md:mt-0 mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
              size="txtQuicksandRegular22Gray500"
            >
              Programming & Tech
            </Text>
            <Img
              className="h-6 md:h-auto ml-1 md:ml-[0] object-cover w-6"
              src="images/img_maskgroup_24x24.png"
              alt="maskgroup_Seven"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[18px] mt-5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-600"
            size="txtQuicksandMedium25"
          >
            Designers
          </Text>
          <div className="flex md:flex-col flex-row gap-[26px] items-center justify-start ml-5 md:ml-[0] mt-[17px] md:px-5 w-[83%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-[76%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-row items-center justify-start p-[7px] rounded-[24px] w-[26%] md:w-full">
                <Text
                  className="ml-[5px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Graphic Designer
                </Text>
                <Img
                  className="h-6 md:h-auto ml-[3px] object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Eight"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-2 rounded-[24px] w-1/4 md:w-full">
                <Text
                  className="ml-[7px] mt-0.5 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  UI/UX Designer
                </Text>
                <Img
                  className="h-6 md:h-auto ml-1 mr-2 object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Nine"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[23%] md:w-full">
                <Text
                  className="ml-[5px] mt-[5px] text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  Logo Designer
                </Text>
                <Img
                  className="h-6 md:h-auto mx-[5px] object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Ten"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[19%] md:w-full">
                <Text
                  className="ml-[11px] mt-[5px] text-[22px] text-gray-500 sm:text-lg md:text-xl"
                  size="txtQuicksandRegular22Gray500"
                >
                  3D Design
                </Text>
                <Img
                  className="h-6 md:h-auto ml-0.5 mr-[11px] object-cover w-6"
                  src="images/img_maskgroup_24x24.png"
                  alt="maskgroup_Eleven"
                />
              </div>
            </div>
            <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[22%] md:w-full">
              <Text
                className="ml-[11px] mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray500"
              >
                Packaging & Cover
              </Text>
              <Img
                className="h-6 md:h-auto ml-[5px] mr-2.5 object-cover w-6"
                src="images/img_maskgroup_24x24.png"
                alt="maskgroup_Twelve"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[18px] mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-600"
            size="txtQuicksandMedium30Bluegray600"
          >
            Miscellaneous
          </Text>
          <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-start ml-5 md:ml-[0] mt-[17px] md:px-5 w-[28%] md:w-full">
            <div className="bg-blue_gray-100 flex flex-row items-center justify-start p-[7px] rounded-[24px] w-[54%] sm:w-full">
              <Text
                className="ml-1 mt-1 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray500"
              >
                Content Writing
              </Text>
              <Img
                className="h-6 md:h-auto ml-1 object-cover w-6"
                src="images/img_maskgroup_24x24.png"
                alt="maskgroup_Thirteen"
              />
            </div>
            <div className="bg-blue_gray-100 flex flex-row items-center justify-center p-[7px] rounded-[24px] w-[41%] sm:w-full">
              <Text
                className="ml-1.5 mt-[5px] text-[22px] text-gray-500 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray500"
              >
                Engineers
              </Text>
              <Img
                className="h-6 md:h-auto ml-1 mr-[7px] object-cover w-6"
                src="images/img_maskgroup_24x24.png"
                alt="maskgroup_Fourteen"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1402px] mt-[42px] mx-auto md:px-5 w-full">
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image15.png"
              alt="imageFifteen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image16.png"
              alt="imageSixteen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image17.png"
              alt="imageSeventeen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image18.png"
              alt="imageEighteen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image19.png"
              alt="imageNineteen"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1402px] mt-2.5 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1403px] mt-[39px] mx-auto md:px-5 w-full">
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image31.png"
              alt="imageThirtyOne"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image32.png"
              alt="imageThirtyTwo"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image33.png"
              alt="imageThirtyThree"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image35.png"
              alt="imageThirtyFive"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1403px] mt-2.5 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[665px] mt-7 md:px-5 w-[8%] md:w-full">
            <a href="javascript:" className="text-gray-500 text-xl">
              <Text size="txtQuicksandMedium20">See More</Text>
            </a>
            <Img
              className="h-3.5 md:h-auto object-cover w-3.5"
              src="images/img_maskgroup_14x14.png"
              alt="maskgroup_Fifteen"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[18px] mt-[38px] text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
            size="txtQuicksandMedium30Gray500"
          >
            <span className="text-gray-500 font-quicksand text-left font-medium">
              Explore{" "}
            </span>
            <span className="text-blue_gray-600 font-quicksand text-left font-medium">
              Updates
            </span>
            <span className="text-gray-500 font-quicksand text-left font-medium">
              {" "}
              from other{" "}
            </span>
            <span className="text-blue_gray-600 font-quicksand text-left font-medium">
              Designers & Developers
            </span>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1329px] mt-8 mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-9 grid md:grid-cols-1 grid-cols-2 w-[83%] md:w-full"
              orientation="horizontal"
            >
              <div className="border border-gray-500 border-solid flex flex-col items-center justify-start sm:ml-[0] p-[13px] rounded-[9px] w-full">
                <div className="md:h-36 h-[140px] my-0.5 relative w-full">
                  <Text
                    className="m-auto text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtQuicksandRegular22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Denis Kravets
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-quicksand text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left font-medium">
                      <>
                        Seeking a talented UI/UX designer! If you&#39;re
                        passionate about crafting seamless digital experiences,
                        let&#39;s connect.{" "}
                      </>
                    </span>
                  </Text>
                  <div className="absolute h-[31px] right-[0] top-[0] w-[31px]">
                    <Img
                      className="h-[31px] m-auto object-cover w-[31px]"
                      src="images/img_messageicon.png"
                      alt="imageremovebgpr"
                    />
                    <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                      <div className="bg-gray-900 h-[5px] rounded-sm w-[5px]"></div>
                      <div className="bg-gray-900 h-[5px] ml-0.5 rounded-sm w-[5px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 border-solid flex flex-col items-center justify-start sm:ml-[0] p-[13px] rounded-[9px] w-full">
                <div className="h-28 md:h-[145px] mb-[30px] mt-[3px] relative w-full">
                  <Text
                    className="m-auto text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtQuicksandRegular22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Daniel Joseph
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-quicksand text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left font-medium">
                      <>
                        Seeking a talented Web Developer! If you&#39;re
                        interested, let&#39;s connect.{" "}
                      </>
                    </span>
                  </Text>
                  <div className="absolute h-[31px] right-[0] top-[0] w-[31px]">
                    <Img
                      className="h-[31px] m-auto object-cover w-[31px]"
                      src="images/img_messageicon.png"
                      alt="imageremovebgpr"
                    />
                    <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                      <div className="bg-gray-900 h-[5px] rounded-sm w-[5px]"></div>
                      <div className="bg-gray-900 h-[5px] ml-0.5 rounded-sm w-[5px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-between w-[9%] md:w-full">
              <a href="javascript:" className="text-gray-500 text-xl">
                <Text size="txtQuicksandMedium20">See More</Text>
              </a>
              <Img
                className="h-3.5 md:h-auto object-cover w-3.5"
                src="images/img_maskgroup_14x14.png"
                alt="maskgroup_Sixteen"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-11 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomePage21OnePage;
