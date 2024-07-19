import React from "react";
import { Icon } from "@iconify/react";

export default function JoinForm({ show, handleClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="bg-white rounded-lg p-8 z-10 lg:max-w-3xl h-[75%] overflow-scroll lg:overflow-hidden space-y-0 lg:space-y-8 w-full">
        <div className="flex flex-row justify-between">
          <div className="mt-4 space-y-4">
            <p className="text-[#1D2130] font-semibold font-roboto lg:text-5xl text-2xl lg:w-2/3 w-full text-left">
              Join as a volunteer
            </p>
            <p className="text-[#1D2130] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
              varius enim in eros elementum tristique.
            </p>
          </div>
          <Icon
            onClick={handleClose}
            className="text-[#1D2130] md:w-20 md:h-20 -mt-8 pt-4 w-14 h-14"
            icon="material-symbols:close"
          />
        </div>
        <form className="flex flex-col space-y-8 justify-center items-center">
          <div className="w-full flex lg:flex-row flex-col mx-auto gap-8 justify-center">
            <div className="lg:w-1/2 w-full flex flex-col">
              <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
                Prenom
              </label>
              <input
                className="border-b-[1px] border-[#E5E5E5] py-2"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col">
              <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
                Nom
              </label>
              <input
                className="border-b-[1px] border-[#E5E5E5] py-2"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
              Email Id
            </label>
            <input
              className="border-b-[1px] border-[#E5E5E5] py-2"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className=" flex w-full flex-col space-y-4 justify-center">
            <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
              Message
            </label>
            <textarea
              className="border-[1px] border-[#E5E5E5] p-3 rounded-lg h-[150px]"
              placeholder="Message"
            />
          </div>
          <button className="bg-[#70C174] text-white lg:w-1/3 w-full font-bold p-3 rounded-lg">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
