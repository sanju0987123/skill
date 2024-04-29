import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HomePageFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1116px] md:h-[1559px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                <div className="md:h-[1343px] h-[900px] relative w-full">
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
                <div className="bg-gradient2  flex flex-col items-start justify-end p-2 rounded-tl-[10px] rounded-tr-[10px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-7 justify-start ml-11 md:ml-[0] mt-[38px] w-[67%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtQuicksandMedium20WhiteA700"
                    >
                      <>
                        Hire Designers & Developers!
                        <br />
                        <br />
                        Expand your team with skilled designers and developers
                        available here. Hire now for quality talent and
                        efficient project execution. Elevate your projects with
                        our expertise!
                      </>
                    </Text>
                    <Img
                      className="common-pointer h-[11px] md:ml-[0] ml-[616px]"
                      src="images/img_user.svg"
                      alt="user"
                      onClick={() => navigate("/homepagefive")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[242px] object-cover right-[0] w-[29%]"
              src="images/img_image26.png"
              alt="imageTwentySix"
            />
          </div>
          <div className="flex flex-row gap-[25px] items-start justify-start mt-9 md:px-5 w-[22%] md:w-full">
            <div className="flex flex-row gap-[25px] items-center justify-between mb-0.5 w-[48%]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtQuicksandMedium30"
              >
                Rent
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                size="txtQuicksandMedium30Gray500"
              >
                Hire
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-0.5 w-[45%]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                size="txtQuicksandMedium30Gray500"
              >
                Sort by
              </Text>
              <Line className="bg-gray-500 h-[26px] my-[5px] w-0.5" />
              <Line className="bg-gray-500 h-[26px] my-[5px] w-0.5" />
            </div>
          </div>
          <Img
            className="h-1 mt-1"
            src="images/img_line28.svg"
            alt="lineTwentyEight"
          />
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1402px] mt-8 mx-auto md:px-5 w-full">
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
          <div className="flex flex-row gap-2 items-center justify-center mt-7 md:px-5 w-[8%] md:w-full">
            <a href="javascript:" className="text-gray-500 text-xl">
              <Text size="txtQuicksandMedium20">See More</Text>
            </a>
            <Img
              className="h-3.5 md:h-auto object-cover w-3.5"
              src="images/img_maskgroup_14x14.png"
              alt="maskgroup_Two"
            />
          </div>
          <Text
            className="mt-[38px] text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
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
                alt="maskgroup_Three"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-11 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomePageFourPage;
