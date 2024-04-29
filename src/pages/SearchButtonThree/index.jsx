import React from "react";

import { Img, Line, List, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const SearchButtonThreePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex font-quicksand h-[2712px] justify-end mx-auto relative w-full">
        <div className="absolute md:h-[1345px] h-[900px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_aerialshoturb.png"
            alt="aerialshoturb"
          />
          <div className="absolute bg-gray-900_8e flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[740px] w-full">
            <Header className="flex md:flex-col md:gap-5 items-center justify-center w-full" />
          </div>
        </div>
        <div className="absolute bottom-[15%] flex flex-col inset-x-[0] items-start justify-start max-w-[1404px] mx-auto md:px-5 w-full">
          <div className="h-[198px] relative w-full">
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
                          className="absolute left-[0] text-white-A700 text-xl top-[19%]"
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
          <div className="flex flex-row gap-[25px] items-start justify-start mt-9 w-[23%] md:w-full">
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
            className="h-1 md:ml-[0] ml-[9px] mt-1"
            src="images/img_line28.svg"
            alt="lineTwentyEight"
          />
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
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
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-2.5 w-full"
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
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[39px] w-full">
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
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center mt-2.5 w-full"
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
          <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[647px] mt-7 w-[8%] md:w-full">
            <a href="javascript:" className="text-gray-500 text-xl">
              <Text size="txtQuicksandMedium20">See More</Text>
            </a>
            <Img
              className="h-3.5 md:h-auto object-cover w-3.5"
              src="images/img_maskgroup_14x14.png"
              alt="maskgroup_One"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-8 w-[95%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-9 grid md:grid-cols-1 grid-cols-2 w-[83%] md:w-full"
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
            <div className="flex flex-row gap-2 items-center justify-between w-[9%] md:w-full">
              <a href="javascript:" className="text-gray-500 text-xl">
                <Text size="txtQuicksandMedium20">See More</Text>
              </a>
              <Img
                className="h-3.5 md:h-auto object-cover w-3.5"
                src="images/img_maskgroup_14x14.png"
                alt="maskgroup_Two"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex items-center justify-center mt-auto mx-auto md:px-5 w-full" />
        <div className="absolute bg-blue_gray-900_93 bottom-[0] flex flex-col font-ramaraja inset-x-[0] items-center justify-start mx-auto pb-[291px] md:px-10 sm:px-5 px-[291px] w-full">
          <div className="bg-white-A700 md:h-[2193px] h-[417px] mb-[1882px] md:px-5 py-[34px] relative rounded-lg w-[97%] md:w-full">
            <List
              className="absolute flex flex-col gap-2 inset-x-[0] items-center mx-auto top-[23%] w-full"
              orientation="vertical"
            >
              <div className="bg-gray-900 flex flex-1 sm:flex-col flex-row gap-[22px] items-start justify-start p-1 w-full">
                <div className="h-[59px] md:h-[63px] sm:ml-[0] ml-[15px] sm:mt-0 mt-1 relative w-[6%] sm:w-full">
                  <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                    size="txtRamaraja35Gray900"
                  >
                    D
                  </Text>
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start sm:mt-0 mt-1.5">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtQuicksandBold22WhiteA700"
                  >
                    <span className="text-white-A700 font-quicksand text-left font-semibold">
                      <>
                        Denis Kravets
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-quicksand text-left text-lg font-medium">
                      UI/UX Designer | HTML | CSS | rent & hire
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[22px] items-center justify-between w-1/2 md:w-full">
                <div className="h-[59px] relative w-[11%] sm:w-full">
                  <div className="absolute bg-gray-900 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[48%] sm:w-full"
                    size="txtRamaraja35"
                  >
                    D
                  </Text>
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtQuicksandBold22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Denis Kravets
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                      UI/UX Designer | HTML | CSS | rent & hire
                    </span>
                  </Text>
                </div>
              </div>
            </List>
            <div className="absolute flex sm:flex-col flex-row gap-[22px] items-center justify-between left-[2%] top-[8%] w-1/2">
              <div className="h-[59px] relative w-[11%] sm:w-full">
                <div className="absolute bg-gray-900 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[48%] sm:w-full"
                  size="txtRamaraja35"
                >
                  D
                </Text>
              </div>
              <div className="flex flex-col font-quicksand items-center justify-start">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtQuicksandBold22"
                >
                  <span className="text-gray-900 font-quicksand text-left font-semibold">
                    <>
                      Denis Kravets
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                    UI/UX Designer | HTML | CSS | rent & hire
                  </span>
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[8%] flex flex-col gap-3 left-[2%] w-1/2"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
                <div className="h-[59px] relative w-[11%] sm:w-full">
                  <div className="absolute bg-gray-900 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[48%] sm:w-full"
                    size="txtRamaraja35"
                  >
                    D
                  </Text>
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtQuicksandBold22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Denis Kravets
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                      UI/UX Designer | HTML | CSS | rent & hire
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
                <div className="h-[59px] relative w-[11%] sm:w-full">
                  <div className="absolute bg-gray-900 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[48%] sm:w-full"
                    size="txtRamaraja35"
                  >
                    D
                  </Text>
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtQuicksandBold22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Denis Kravets
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left text-lg font-medium">
                      UI/UX Designer | HTML | CSS | rent & hire
                    </span>
                  </Text>
                </div>
              </div>
            </List>
            <div className="absolute bottom-[11%] flex flex-col font-quicksand gap-[49px] items-center justify-start right-[3%]">
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Visit Profile
              </Text>
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Visit Profile
              </Text>
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Visit Profile
              </Text>
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Visit Profile
              </Text>
              <Text
                className="text-gray-500 text-lg"
                size="txtQuicksandMedium18Gray500"
              >
                Visit Profile
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchButtonThreePage;
