import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const MessagePage = () => {
  return (
    <>
      <div className="bg-gray-900 font-quicksand h-[900px] mx-auto relative w-full">
        <div className="flex flex-row gap-2.5 h-full items-center justify-start ml-[18px] mt-8 md:px-5 w-[10%]">
          <Img className="h-0.5" src="images/img_line10.svg" alt="lineTen" />
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
            size="txtQuicksandBold25WhiteA700"
          >
            Go Back
          </Text>
        </div>
        <div className="absolute md:h-[1257px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute font-ramaraja md:h-[1257px] h-[900px] inset-[0] justify-center m-auto w-[99%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[23px] justify-start md:mt-0 mt-[67px] w-[27%] md:w-full">
                  <div className="bg-blue_gray-900 flex flex-row gap-[22px] items-start justify-start p-0.5 w-full">
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
                  <div className="flex flex-col gap-[26px] items-center justify-start md:ml-[0] ml-[18px] w-[63%] md:w-full">
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
                </div>
                <div className="flex md:flex-1 flex-col font-quicksand gap-8 items-center justify-start w-[73%] md:w-full">
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
                        className="h-[42px] md:h-auto md:ml-[0] ml-[768px] object-cover w-[42px]"
                        src="images/img_maskgroup_42x42.png"
                        alt="maskgroup"
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
                    name="groupSixtyTwo"
                    placeholder="Write a message"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                    wrapClassName="rounded-[30px] w-full"
                    color="white_A700"
                    size="xs"
                  ></Input>
                </div>
              </div>
            </div>
            <Line className="absolute bg-white-A700 h-[900px] inset-y-[0] left-[27%] my-auto w-px" />
          </div>
          <Line className="absolute bg-white-A700 h-px right-[0] top-[13%] w-[74%]" />
          <Text
            className="absolute bottom-[33%] right-[37%] text-lg text-white-A700"
            size="txtQuicksandMedium18WhiteA700"
          >
            Thu, 09:10
          </Text>
          <Text
            className="absolute bg-blue_gray-900 h-[19px] justify-center px-[11px] py-0.5 right-[2%] text-white-A700 text-xs top-[10%] w-[133px]"
            size="txtQuicksandMedium12"
          >
            Video Conferensing
          </Text>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
