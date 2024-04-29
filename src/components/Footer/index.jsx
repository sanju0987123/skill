import React from "react";
import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[55px]  mt-[31px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <Text
                    className="text-white-A700 text-xl mb-0.5"
                    size="txtQuicksandSemiBold20"
                  >
                    Categories
                  </Text>
                  <Text
                    className="leading-[30.00px] text-gray-500 text-lg"
                    size="txtQuicksandRegular18"
                  >
                    Graphic Designer
                    <br />
                    UI/UX Designer
                    <br />
                    Web Developer
                    <br />
                    Software Developer
                    <br />
                    Application Developer
                    <br />
                    Programming & Tech
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-white-A700 text-xl mb-0.5"
                    size="txtQuicksandSemiBold20"
                  >
                    Support
                  </Text>
                <a href='/contactus'><Text 
                    className="leading-[30.00px] text-gray-500 text-lg"
                    size="txtQuicksandRegular18" 
                  >
                    Terms & Conditions
                    <br />
                    Help Center
                    <br />
                    Contact Us
                  </Text></a>
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-white-A700 text-xl mb-0.5"
                    size="txtQuicksandSemiBold20"
                  >
                    About Us
                  </Text>
                 <a href='/newaboutus'><Text
                    className="leading-[30.00px] text-gray-500 text-lg"
                    size="txtQuicksandRegular18"
                  >
                    What we do?
                    <br />
                    Privacy Policy
                  </Text></a> 
                </div>
                <div className="flex flex-col">
                  <Text
                    className="text-white-A700 text-xl mb-0.5"
                    size="txtQuicksandSemiBold20"
                  >
                    Follow Us
                  </Text>
                  <div className="flex">
                 <a href="https://twitter.com/?lang=en" class="twitter"><Img
                      className="h-9 md:h-auto ml-[19px] mt-3.5 object-cover w-9"
                      src="images/img_image20.png"
                      alt="imageTwenty_One"
                    /></a>
                    
                    <a href="https://www.facebook.com" class="facebook"><Img
                      className="h-9 md:h-auto ml-[19px] mt-3.5 object-cover w-9"
                      src="images/img_image21.png"
                      alt="imageTwentyOne_One"
                    /></a>
                     <a href="https://www.instagram.com" class="facebook"><Img
                      className="h-9 md:h-auto ml-[19px] mt-3.5 object-cover w-9"
                      src="images/img_image22.png"
                      alt="imageTwentyTwo_One"
                    /></a>
                    <a href='https://www.linkedin.com'><Img
                      className="h-9 md:h-auto ml-[19px] mt-3.5 object-cover w-9"
                      src="images/img_image23.png"
                      alt="imageTwentyThree_One"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-white-A700 h-px mt-[27px] w-full" />
            <Text
              className="mt-5 text-gray-500 text-lg"
              size="txtQuicksandMedium18Gray500"
            >
              skillsphere.in
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
