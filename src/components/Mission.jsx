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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
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
