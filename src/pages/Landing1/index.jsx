
import FrameComponent from "components/FrameComponent";
import FrameComponent1 from "components/FrameComponent1";

const Landing1 = () => {
  return (
    <div className="w-full h-[56.25rem] relative bg-white overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[1.563rem] pl-[0rem] box-border gap-[0rem_2.25rem] tracking-[normal] mq750:h-auto mq750:gap-[0rem_1.125rem]  ">
      <div className="mb-[-7.75rem] h-[64rem] w-[0.938rem] relative box-border border-r-[15px] border-solid border-gray-900" />
      <img
        className="h-[4.813rem] w-[0rem] relative object-contain hidden"
        alt=""
        src="images/line-5.svg"
      />
      <img
        className="h-[1.188rem] w-[0rem] relative object-contain hidden"
        alt=""
        src="images/line-6.svg"
      />
      <main className="mt-[-13.812rem] flex-1 flex flex-row items-start justify-between pt-[15.938rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_51px)] shrink-0 gap-[1.25rem] mq750:flex-wrap mq750:pt-[10.375rem] mq750:box-border">
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <div className="h-[6.25rem] w-[6.25rem] relative overflow-hidden shrink-0 hidden" />
    </div>
  );
};

export default Landing1;
