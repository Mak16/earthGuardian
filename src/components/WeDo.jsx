import React from "react";
import dogImg from "../assets/images/whatWeDo/plastic.jpg";

export default function WeDo() {
  return (
    <div className="mt-20 lg:mt-28 pt-10 w-[90%] mx-auto flex lg:flex-row flex-col space-x-12">
      <div className="lg:w-3/6 w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
        <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-8 rounded-xl"></div>
        <div className="lg:mt-1 -mt-8  lg:space-y-12 space-y-6">
          <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
            CE QUE NOUS FAISONS
          </h2>
          <p className="font-roboto lg:text-5xl text-2xl text-[#1D2130] text-center lg:text-left font-medium">
            Nous sommes présents dans le monde entier
          </p>
          <p className="text-sm text-justify  lg:text-left">
            À propos de nous Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquam a deserunt placeat, aut unde pariatur aliquid aperiam
            numquam tempore. Quos animi, qui doloribus dolore commodi sunt vel
            hic error et.
          </p>
        </div>
      </div>
      <div className="pr-4 lg:p-0">
        <img
          className="lg:w-[40rem] w-full lg:h-[24rem] h-56 lg:mt-0 mt-5 object-cover rounded-2xl"
          src={dogImg}
          alt=""
        />
      </div>
    </div>
  );
}
