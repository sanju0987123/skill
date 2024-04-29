import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "components";

const FrameComponent1 = () => {
  const onSignUpRectangleClick = useCallback(() => {
    navigate()
  }, []);
  const navigate = useNavigate();
  const onSignInClick = useCallback(() => {
    console.log("hello")
    navigate("/signin");
  }, []);
  const onSignUpClick = useCallback(() => {
    console.log("hello")
    navigate("/signup21");
  }, []);


  return (
    <div className="w-[37.875rem] flex flex-col items-start justify-start gap-[5.063rem_0rem] max-w-full text-left text-[1.563rem] text-gray-900 font-quicksand mq450:gap-[1.25rem_0rem] mq675:gap-[2.5rem_0rem]">
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.188rem] pb-[5.5rem] text-chocolate">
        <b className="relative mq450:text-[1.25rem]">SKILLSPHERE</b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.063rem_0rem] max-w-full text-[8.75rem] font-ramaraja">
        <h1 className="m-0 h-[11.688rem] relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[2.188rem] mq750:text-[3.5rem]">
          Hire Skills
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.188rem] box-border max-w-full text-[1.375rem] font-quicksand">
          <div className="w-[37.688rem] relative font-medium inline-block shrink-0 max-w-full mq450:text-[1.125rem]">
            Build your team by hiring talented designers and developers to bring
            your projects to life. With a carefully curated team, you can
            leverage a diverse range of skills and expertise to tackle
            challenges and create exceptional experiences.
            
          </div>
        </div>
      </div>
      <div className="w-[18.688rem] h-[3.313rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0rem_1.063rem]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] pr-[1.375rem] pl-[0rem]">
            {/* <div
              className="self-stretch flex-1 relative rounded-31xl cursor-pointer border-[1px] border-solid border-black"
              onClick={onSignUpRectangleClick}
            />
            <b className="relative inline-block z-[1] ml-[-6.812rem] mq450:text-[1.25rem]">
              Sign In
            </b> */}
             <button className="bg-white-A700 text-black-900 relative z-[1] mq450:text-xl mx-0 hover:bg-black-900 h-[53px] w-[137px] rounded-full  cursor-pointer hover:text-white-A700 ml-5 font-bold font-   justify-items-center  font-quicksand text-[1.4rem] outline outline-2 outline-offset-2 "
                    onClick={onSignInClick}
                  >Sign In </button>
<button className="bg-white-A700 text-black-900 relative z-[1] mq450:text-xl mx-0 hover:bg-black-900 h-[53px] w-[137px] rounded-full cursor-pointer hover:text-white-A700 ml-5 font-bold font-quicksand text-[1.4rem] justify-items-center outline outline-2 outline-offset-2 "
                    onClick={onSignUpClick}
                  >Sign Up </button>

          </div>
          {/* <div className="rounded-31xl bg-gray flex flex-row items-center justify-center py-[0.688rem] pr-[1.063rem] pl-[1.375rem] whitespace-nowrap text-white">
            <div className="h-[3.313rem] w-[8.563rem] relative rounded-31xl bg-gray hidden" />
            <b className="relative z-[1]">Sign Up</b>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
