import React from "react";
import img from "../assets/images/soil.jpg";
import { Icon } from "@iconify/react";

export default function Banner() {
  return (
    <>
      <div
        className="flex flex-col justify-start bg-cover bg-no-repeat md:bg-center bg-top h-[60vh] md:h-screen w-full mt-20 md:mt-24"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="lg:w-[50%] lg:ml-28 m-auto flex flex-col justify-center items-center lg:items-start w-[90%]">
          <p className="md:text-[4rem] font-roboto text-[2rem] font-semibold lg:text-left text-center text-white md:mt-36 lg:mt-28">
            Sauver l'environnement aujourd'hui pour un meilleur avenir
          </p>
          <div className="flex flex-row justify-start gap-2 mt-5">
            <span className="text-[#525560] font-roboto font-semibold bg-white rounded-md lg:text-xl md:text-lg text-sm flex justify-center items-center px-3">
              Ce que nous faisons
            </span>
            <div className="flex flex-row justify-center items-center">
              <Icon
                icon="icon-park-solid:play"
                className="text-white lg:w-14 md:w-12 md:h-12 lg:h-14 w-8 h-8"
              />
              <p className="text-white font-roboto font-semibold ml-1 md:text-lg lg:text-xl text-sm">
                Play Video
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col lg:flex-row m-auto justify-center items-center lg:space-x-8 space-y-1">
          <p className=" font-roboto text-white text-sm lg:text-lg font-semibold">
            23 800 arbres plantés
          </p>
          <div className="border-t-2 bg-gray-300 my-6 w-[60%]"></div>
          <p className="font-roboto text-white text-sm lg:text-lg font-semibold">
            5840 dons collectés
          </p>
        </div>
      </div>
    </>
  );
}
