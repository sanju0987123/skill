import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Input, Text } from "components";

const HomePageMessageBoxModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[45%]"
      overlayClassName="bg-blue_gray-900_93 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gradient4  border-2 border-black-900 border-solid flex flex-col gap-[30px] items-center justify-start mb-[1268px] p-6 md:px-5 rounded-[9px] w-full">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
            size="txtRamaraja25WhiteA700"
          >
            Send message to Denis Kravets
          </Text>
          <div className="flex flex-col font-quicksand items-center justify-start w-[95%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-center justify-between w-[69%] md:w-full">
                <Text
                  className="text-gray-500 text-lg"
                  size="txtQuicksandRegular18"
                >
                  Your Name *
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtQuicksandRegular18"
                >
                  Your Role *
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between mt-2.5 w-full">
                <Input
                  name="rectangleEighteen"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-[50px] sm:w-full"
                  shape="round"
                  color="gray_500"
                ></Input>
                <Input
                  name="rectangleTwentyEight"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-[50px] sm:w-full"
                  shape="round"
                  color="gray_500"
                ></Input>
              </div>
              <Text
                className="mt-3.5 text-gray-500 text-lg"
                size="txtQuicksandRegular18"
              >
                You are looking for *
              </Text>
              <Input
                name="rectangleTwentyNine"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-[50px] mt-2.5 w-full"
                shape="round"
                color="gray_500"
              ></Input>
              <Text
                className="mt-3.5 text-gray-500 text-lg"
                size="txtQuicksandRegular18"
              >
                Brief Description of the Project *
              </Text>
              <div className="border border-gray-500 border-solid h-[79px] mt-2.5 rounded-[9px] w-full"></div>
              <div className="flex flex-row items-center justify-between mt-[13px] w-[68%] md:w-full">
                <Text
                  className="text-gray-500 text-lg"
                  size="txtQuicksandRegular18"
                >
                  Working Hours/Week *
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtQuicksandRegular18"
                >
                  Payscale *
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between mt-2.5 w-full">
                <Input
                  name="rectangleThirtyOne"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-[51px] sm:w-full"
                  shape="round"
                  color="gray_500"
                ></Input>
                <Input
                  name="rectangleThirtyTwo"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex sm:flex-1 h-[51px] sm:w-full"
                  shape="round"
                  color="gray_500"
                ></Input>
              </div>
              <Text
                className="mt-[13px] text-gray-500 text-lg"
                size="txtQuicksandRegular18"
              >
                Write a message
              </Text>
              <div className="border border-gray-500 border-solid h-[79px] mt-2.5 rounded-[9px] w-full"></div>
              <Button
                className="!text-gray-900_01 cursor-pointer font-semibold leading-[normal] min-w-[74px] md:ml-[0] ml-[242px] mt-7 rounded-[9px] text-center text-lg"
                color="gray_500"
                size="sm"
                variant="fill"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default HomePageMessageBoxModal;
