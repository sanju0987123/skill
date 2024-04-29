import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const MessageTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-quicksand h-[900px] mx-auto relative w-full">
        <Button
          className="common-pointer absolute bg-transparent cursor-pointer flex items-center justify-center left-[0] min-w-[143px] ml-[18px] mt-8 top-[0]"
          onClick={() => navigate("/homepage21one")}
          leftIcon={
            <div className="mt-[18px] mb-[11px] mr-2.5 bg-white-A700 top-[2%] bottom-[1%] right-[1%] absolute">
              <Img
                className="absolute"
                src="images/img_line10.svg"
                alt="Line 10"
              />
            </div>
          }
        >
          <div className="font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left text-white-A700">
            Go Back
          </div>
        </Button>
        <div className="absolute md:h-[1833px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute flex md:flex-col flex-row font-ramaraja gap-3 h-full inset-[0] items-center justify-between m-auto w-[99%]">
            <div className="h-[900px] relative w-[27%] md:w-full">
              <div className="absolute bg-blue_gray-900 flex flex-row gap-[22px] inset-x-[0] items-start justify-start mx-auto p-0.5 top-[13%] w-full">
                <div className="h-[59px] md:h-[67px] ml-[15px] mt-2 relative w-[12%]">
                  <div className="h-[59px] m-auto w-full">
                    <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                      size="txtRamaraja35Gray900"
                    >
                      D
                    </Text>
                  </div>
                  <div className="absolute bg-red-900 h-3 right-[0] rounded-[50%] top-[0] w-3"></div>
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start mt-2.5">
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
                    <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                      Sent you a message
                    </span>
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[26px] items-center justify-start left-[5%] top-[23%] w-[63%]">
                <List
                  className="flex flex-col gap-[25px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[22px] items-center justify-between my-0 w-full">
                    <div className="h-[59px] relative w-[18%]">
                      <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                        size="txtRamaraja35Gray900"
                      >
                        D
                      </Text>
                    </div>
                    <div className="flex flex-col font-quicksand items-center justify-start">
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
                        <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                          Sent you a message
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[22px] items-center justify-between my-0 w-full">
                    <div className="h-[59px] relative w-[18%]">
                      <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                        size="txtRamaraja35Gray900"
                      >
                        D
                      </Text>
                    </div>
                    <div className="flex flex-col font-quicksand items-center justify-start">
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
                        <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                          Sent you a message
                        </span>
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                  <div className="h-[59px] relative w-[18%]">
                    <div className="h-[59px] m-auto w-full">
                      <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                        size="txtRamaraja35Gray900"
                      >
                        D
                      </Text>
                    </div>
                    <div className="absolute bg-red-900 h-3 right-[0] rounded-[50%] top-[0] w-3"></div>
                  </div>
                  <div className="flex flex-col font-quicksand items-center justify-start">
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
                      <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                        Sent you a message
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-white-A700 h-[900px] inset-y-[0] my-auto right-[0] w-px" />
            </div>
            <div className="flex flex-col font-quicksand gap-8 items-center justify-start w-[73%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row font-ramaraja md:gap-5 items-center justify-start w-full">
                  <div className="h-[59px] relative w-[5%] md:w-full">
                    <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                      size="txtRamaraja35Gray900"
                    >
                      D
                    </Text>
                  </div>
                  <div className="flex flex-col font-quicksand items-center justify-start md:ml-[0] ml-[22px]">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtQuicksandSemiBold22"
                    >
                      Denis Kravets
                    </Text>
                  </div>
                  <Img
                    className="common-pointer h-[42px] md:h-auto md:ml-[0] ml-[768px] object-cover w-[42px]"
                    src="images/img_maskgroup_42x42.png"
                    alt="maskgroup"
                    onClick={() => navigate("/message")}
                  />
                </div>
                <Button
                  className="cursor-pointer font-medium font-quicksand leading-[normal] min-w-[119px] mt-[517px] rounded-[27px] text-center text-lg"
                  color="white_A700"
                  size="lg"
                  variant="outline"
                >
                  Hey there
                </Button>
                <Button
                  className="!text-gray-900 cursor-pointer font-medium font-quicksand leading-[normal] min-w-[119px] md:ml-[0] ml-[900px] mt-8 rounded-[27px] text-center text-lg"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Hey there
                </Button>
              </div>
              <Input
                name="group136"
                placeholder="Write a message"
                className="font-medium leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                wrapClassName="rounded-[30px] w-full"
                color="white_A700"
                size="xs"
              ></Input>
            </div>
          </div>
          <Line className="absolute bg-white-A700 h-px right-[0] top-[13%] w-[74%]" />
          <Text
            className="absolute bottom-[33%] right-[37%] text-lg text-white-A700"
            size="txtQuicksandMedium18WhiteA700"
          >
            Thu, 09:10
          </Text>
        </div>
      </div>
    </>
  );
};

export default MessageTwoPage;
