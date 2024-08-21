import React from "react";

export default function ContactForm() {
  return (
    <div className="w-[70%] mx-auto">
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
        <div className="w-full flex lg:flex-row flex-col mx-auto gap-8 justify-center">
          <div className="lg:w-1/2 w-full flex flex-col">
            <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
              Email Id
            </label>
            <input
              className="border-b-[1px] border-[#E5E5E5] py-2"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col">
            <label className="text-[#1D2130] font-roboto text-sm" htmlFor="">
              Object
            </label>
            <input
              className="border-b-[1px] border-[#E5E5E5] py-2"
              type="text"
              placeholder=""
            />
          </div>
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
  );
}
