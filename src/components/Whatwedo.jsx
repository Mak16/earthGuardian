import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import dogImg from "../assets/images/whatWeDo/peacock.jpg";
import town from "../assets/images/whatWeDo/town.svg";
import tree from "../assets/images/whatWeDo/tree.svg";
import water from "../assets/images/whatWeDo/water.svg";
import animal from "../assets/images/whatWeDo/animal.svg";

function Object({ src, title, description }) {
  return (
    <div className="flex flex-row ml-5">
      <div className="">
        <img src={src} alt="" className="lg:w-20 w-28 lg:h-20 h-28 mt-0" />
      </div>
      <div className="flex flex-col lg:mt-4 mt-9 ml-6">
        <h3 className="font-medium font-roboto text-[#1D2130] text-2xl">
          {title}
        </h3>
        <p className="text-sm text-[#1D2130] text-justify lg:text-left font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Whatwedo() {
  return (
    <div className="bg-[#EFF7F2] lg:mt-28 mt-10">
      <div className="flex lg:flex-row flex-col w-[90%] lg:w-[90%] mx-auto space-y-8 lg:mt-5 py-16">
        <div className="lg:w-3/6 w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
          <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-8 rounded-xl"></div>
          <div className="lg:mt-1 -mt-8  lg:space-y-12 space-y-6">
            <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
              CE QUE NOUS FAISONS
            </h2>
            <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium">
              Nous prenons soin de la terre et de la génération future
            </p>
            <p className="text-sm text-justify  lg:text-left">
              À propos de nous Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam a deserunt placeat, aut unde pariatur
              aliquid aperiam numquam tempore. Quos animi, qui doloribus dolore
              commodi sunt vel hic error et.
            </p>
            <div className="mt-10 flex m-auto">
              <div className="w-[2px] mt-10 lg:mt-4 h-[84vh] lg:h-[45vh] bg-[#E5E5E5]" />
              <div className="flex flex-col space-y-3">
                <Object
                  src={town}
                  title="Bâtir des villes saines"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
                consequatur accusantium, iusto consectetur error quod dolores iure
                fuga incidunt debitis voluptatum perferendis reiciendis eaque numquam"
                />
                <Object
                  src={tree}
                  title="Plantation d'arbres"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
                consequatur accusantium, iusto consectetur error quod dolores iure
                fuga incidunt debitis voluptatum perferendis reiciendis eaque numquam"
                />
                <Object
                  src={water}
                  title="Protéger la terre et l'eau"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
                consequatur accusantium, iusto consectetur error quod dolores iure
                fuga incidunt debitis voluptatum perferendis reiciendis eaque numquam"
                />
                <Object
                  src={animal}
                  title="Sécurité des animaux"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea
                consequatur accusantium, iusto consectetur error quod dolores iure
                fuga incidunt debitis voluptatum perferendis reiciendis eaque numquam"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center m-auto">
          <img
            className="lg:w-[30rem] m-auto w-[96%] lg:h-[40rem] h-[30rem] rounded-2xl"
            src={dogImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
