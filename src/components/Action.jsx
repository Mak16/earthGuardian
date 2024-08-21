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
        <p className="text-sm text-[#1D2130] text-justify lg:text-left font-thin font-roboto">
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
              description="Nous œuvrons pour des villes plus propres et vertes en promouvant la gestion responsable des déchets et l'urbanisation durable. Ensemble, nous créons des espaces urbains où il fait bon vivre."
              />
            <Object
              src={tree}
              title="Plantation d'arbres"
              description="La reforestation est au cœur de notre mission. Chaque arbre planté aide à lutter contre le changement climatique et à préserver la biodiversité pour un avenir plus vert."
              />
            <Object
              src={water}
              title="Protéger la terre et l'eau"
              description=" Nous protégeons les sols et les cours d'eau en luttant contre la pollution et en encourageant des pratiques durables. Préservons ces ressources vitales pour les générations futures."
              />
            <Object
              src={animal}
              title="Sécurité des animaux"
              description="Nous protégeons les animaux en danger et leurs habitats naturels. Ensemble, nous luttons pour préserver la biodiversité et assurer la sécurité de la faune sauvage."
              />
            <Object
              src={biodiversity}
              title="Durabilité des ressources en eau"
              description="Nous travaillons à préserver les ressources en eau en promouvant une gestion responsable et des pratiques durables. Notre objectif est de garantir un accès à de l'eau propre pour tous, tout en protégeant les écosystèmes aquatiques."
            />
            <Object
              src={durability}
              title="Biodiversité"
              description="Nous nous engageons à protéger la biodiversité en préservant les habitats naturels et en soutenant les espèces menacées. Notre but est de maintenir un équilibre écologique essentiel à la vie sur Terre."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
