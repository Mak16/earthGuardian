import React from "react";
import town from "../assets/images/whatWeDo/town.svg";
import tree from "../assets/images/whatWeDo/tree.svg";
import water from "../assets/images/whatWeDo/water.svg";
import animal from "../assets/images/whatWeDo/animal.svg";
import biodiversity from "../assets/images/whatWeDo/biodiversity.svg";
import durability from "../assets/images/whatWeDo/durability.svg";

function Object({ src, title, description }) {
  return (
    <div className="flex flex-row ml-5">
      <div className="">
        <img src={src} alt="" className="lg:w-20 w-28 lg:h-20 h-28 mt-0" />
      </div>
      <div className="flex flex-col lg:mt-4 mt-9 ml-6">
        <h3 className="font-medium font-roboto text-[#1D2130] text-xl">
          {title}
        </h3>
        <p className="text-sm text-[#1D2130] text-justify lg:text-left font-thin">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Action() {
  return (
    <div className="bg-[#EFF7F2] lg:mt-28 mt-10">
      <div className="flex lg:flex-col flex-col w-[90%] lg:w-[90%] mx-auto space-y-8 lg:mt-5 py-16">
        <div className="w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
          <p className="font-roboto lg:text-5xl text-2xl text-[#1D2130] text-center lg:text-left font-medium">
            Nos actions en faveur de l'environnement
          </p>
        </div>
        <div className=" flex items-center m-auto space-y-4">
          <div className="grid lg:grid-cols-3 grid-rows-1 space-y-3">
            <Object
              src={town}
              title="Bâtir des villes saines"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <Object
              src={tree}
              title="Plantation d'arbres"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <Object
              src={water}
              title="Protéger la terre et l'eau"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <Object
              src={animal}
              title="Sécurité des animaux"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <Object
              src={biodiversity}
              title="Durabilité des ressources en eau"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <Object
              src={durability}
              title="Biodiversité"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
