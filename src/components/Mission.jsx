import React from "react";
import Partener from "./Partener";

export default function Mission() {
  return (
    <div className="bg-[#EFF7F2] relative lg:py-60 pt-36 pb-16 rounded-lg z-0">
      <div className="lg:w-[90%] mx-auto flex flex-col">
        <div className="flex lg:flex-row flex-col w-[90%] mx-auto space-x-0 lg:space-x-20">
          <div className="lg:w-1/2 w-full space-y-5">
            <h2 className="text-[#1D2130] font-roboto text-center lg:text-left">
              NOTRE MISSION
            </h2>
            <p className="font-roboto text-3xl font-semibold leading-9 text-center lg:text-left text-[#1D2130]">
              Nous créons le monde, nous sauvons notre propre environnement
            </p>
            <p className="text-[#1D2130] font-normal text-center lg:text-left">
              Notre mission est de protéger l'environnement en menant des
              actions concrètes contre la pollution, en restaurer les
              écosystèmes dégradés et en sensibilisant les communautés à la
              durabilité. Nous agissons pour un avenir plus vert et plus sain
              pour tous.
            </p>
          </div>
          <div className="lg:w-1/2 w-full space-y-5">
            <h2 className="text-[#1D2130] font-roboto text-center lg:text-left">
              NOTRE VISION
            </h2>
            <p className="font-roboto text-3xl font-semibold leading-9 text-center lg:text-left text-[#1D2130]">
              Planter plus d'arbres pour réduire la pollution de l'air dans le
              monde
            </p>
            <p className="text-[#1D2130] font-normal text-center lg:text-left">
              Nous envisageons un monde où l'harmonie entre les humains et la
              nature est restaurée. En intégrant des pratiques durables et en
              renforçant les efforts de conservation, nous aspirons à créer un
              environnement sain pour les générations futures.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Partener />
        </div>
      </div>
    </div>
  );
}
