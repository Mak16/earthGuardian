import React from "react";
import Marquee from "react-fast-marquee";
import unLogo from "../assets/images/UN-Logo.png";
import faoLogo from "../assets/images/fao_logo.png";
import wbLogo from "../assets/images/la-banque-mondiale-logo.png";
import unicefLogo from "../assets/images/unicef_logo.png";

const slides = [
  { img: <img src={unLogo} /> },
  { img: <img src={faoLogo} /> },
  { img: <img src={wbLogo} /> },
  { img: <img src={unicefLogo} /> },
];

export default function Partener() {
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className="">
      <div className="w-[90%] flex flex-col lg:flex-row m-auto justify-center items-center lg:space-x-8 space-y-1">
        <h2 className="text-xl font-roboto lg:text-lg text-center text-[#1D2130] lg:text-left">
          NOS PARTENAIRES
        </h2>
        <div className="border-t-2 bg-gray-300 my-6 w-[80%]"></div>
      </div>
      <div className="w-full h-12">
        <Marquee
          gradient
          pauseOnHover="true"
          className="py-3 overflow-hidden grid  "
        >
          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={faoLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={wbLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          {/* <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1 ">
            <img src="./assets/yc.png" className="w-40 " alt="" />
          </div> */}

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unicefLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unLogo} className="lg:w-40 w-20 " alt="" />
          </div>
          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={faoLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={wbLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          {/* <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1 ">
            <img src="./assets/yc.png" className="w-40 " alt="" />
          </div> */}

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unicefLogo} className="lg:w-40 w-20 " alt="" />
          </div>

          <div className=" flex pr-5 flex-col justify-center items-center h-full lg:mx-5 mx-1">
            <img src={unLogo} className="lg:w-40 w-20 " alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
