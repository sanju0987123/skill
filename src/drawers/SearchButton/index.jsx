import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Sidebar } from "react-pro-sidebar";

import { Button, Line, Text } from "components";

const SearchButtonDrawer = (props) => {
  return (
    <Drawer placement="left" className="!w-2/5" {...props}>
      <div>
        <div className="flex flex-col font-quicksand items-start justify-start mx-auto sm:w-full md:w-full">
          <Sidebar className="!sticky !w-[568px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[18px] mr-10 mt-[250px] w-[90%]">
              <div className="bg-gray-500 h-[19px] sm:mt-0 my-[5px] rounded-[9px] w-[19px]"></div>
              <Text
                className="sm:ml-[0] ml-[15px] sm:mt-0 mt-0.5 text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Rent
              </Text>
              <Line className="bg-gray-500 sm:h-0.5 h-[26px] sm:ml-[0] ml-[316px] w-0.5 sm:w-full" />
              <Line className="bg-gray-500 sm:h-0.5 h-[26px] sm:ml-[0] ml-[15px] w-0.5 sm:w-full" />
              <Text
                className="mb-0.5 sm:ml-[0] ml-[19px] text-[22px] text-gray-500 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray500"
              >
                Sort by
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-center md:ml-[0] ml-[18px] mr-[475px] mt-[11px] w-[14%]">
              <div className="bg-gray-500 h-[19px] sm:mt-0 my-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Hire
              </Text>
            </div>
            <Line className="bg-gray-500 h-px md:ml-[0] ml-[18px] mr-10 mt-[18px] w-[90%]" />
            <Text
              className="md:ml-[0] ml-[18px] mr-[417px] mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-600"
              size="txtQuicksandMedium25"
            >
              Developers
            </Text>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[323px] mt-[17px] w-2/5">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Website Developer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[291px] mt-[11px] w-[46%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Application Developer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[312px] mt-[11px] w-[42%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Software Developer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[343px] mt-[11px] w-[37%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Game Developer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[385px] mt-[11px] w-[30%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                AI Developer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[301px] mt-[11px] w-[44%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Programming & Tech
              </Text>
            </div>
            <Line className="bg-gray-500 h-px md:ml-[0] ml-[18px] mr-10 mt-[22px] w-[90%]" />
            <Text
              className="md:ml-[0] ml-[18px] mr-[433px] mt-6 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-600"
              size="txtQuicksandMedium25"
            >
              Designers
            </Text>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[340px] mt-[17px] w-[37%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Graphic Designer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[357px] mt-2.5 w-[34%]">
              <div className="bg-gray-500 h-[19px] sm:mt-0 my-1 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                UI/UX Designer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[367px] mt-3 w-[33%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Logo Designer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[391px] mt-[11px] w-[28%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                3D Designer
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[321px] mt-2.5 w-[41%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Packaging & Cover
              </Text>
            </div>
            <Line className="bg-gray-500 h-px md:ml-[0] ml-[18px] mr-10 mt-[26px] w-[90%]" />
            <Text
              className="md:ml-[0] ml-[18px] mr-[386px] mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-600"
              size="txtQuicksandMedium25"
            >
              Miscellaneous
            </Text>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[356px] mt-5 w-[35%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Content Writing
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] mr-[415px] mt-[11px] w-[24%]">
              <div className="bg-gray-500 h-[19px] mb-1.5 sm:mt-0 mt-0.5 rounded-[9px] w-[19px]"></div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandRegular22Gray900"
              >
                Engineers
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] mb-[1103px] min-w-[86px] md:ml-[0] ml-[239px] mr-[243px] mt-[33px] rounded-[22px] text-center text-lg"
              color="gray_500"
              size="md"
              variant="fill"
            >
              Done
            </Button>
          </Sidebar>
        </div>
      </div>
    </Drawer>
  );
};

export default SearchButtonDrawer;
