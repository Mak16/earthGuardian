import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function ContactUs() {
  return (
    <div className="space-y-16">
      <div className="rounded-lg bg-[#EBF0F9] py-10">
        <div className="flex lg:flex-row flex-col space-y-8 lg:mt-28 mt-24 lg:py-8 py-4 w-[90%] lg:w-[90%] mx-auto">
          <div className="lg:w-2/5 w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
            <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl"></div>
            <div className="lg:mt-1 -mt-8 space-y-6">
              <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
                CONTACTEZ-NOUS
              </h2>
              <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium">
                Nous aimerions avoir votre avis
              </p>
              <p className="text-sm text-justify lg:text-left">
                Vous avez une question à poser ou vous souhaitez obtenir des
                informations ? N'hésitez pas à nous contacter via le formulaire
                ou les coordonnées suivantes.
              </p>
            </div>
          </div>
          <div className="w-1/5 hidden lg:block" />
          <div className="lg:w-2/5 mx-auto w-full space-y-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-[#1D2130] lg:text-left text-center font-roboto font-semibold text-2xl">
                Parlons-en !
              </h2>
              <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-4">
                <Link
                  className="font-roboto font-light lg:text-left text-center"
                  to="tel:243825502783"
                >
                  +243 825502783
                </Link>
                <Link
                  className="font-roboto font-light lg:text-left text-center"
                  to="mailto:makedabanza16@gmail.com"
                >
                  makedabanza16@gmail.com
                </Link>
              </div>
              <div className="border-t-[1px] bg-[#1D2130] lg:w-[50%] w-full rounded-xl" />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-[#1D2130] lg:text-left text-center font-roboto font-semibold text-2xl">
                Siège social
              </h2>
              <div className="flex flex-col">
                <p className="font-roboto font-light lg:text-left text-center">
                  16, Avenue des bâtisseurs, Golf Faustin, Lubumbanshi
                </p>
                <p className="font-roboto font-light lg:text-left text-center">
                  RDC
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-[#1D2130] lg:text-left text-center font-roboto font-semibold text-2xl">
                Bureau régional
              </h2>
              <div className="flex flex-col">
                <p className="font-roboto font-light lg:text-left text-center">
                  16, Avenue des bâtisseurs, Golf Faustin, Kinshasa
                </p>
                <p className="font-roboto font-light lg:text-left text-center">
                  RDC
                </p>
              </div>
            </div>
            <div className="flex flex-row lg:justify-start justify-center">
              <Link
                to="https://www.facebook.com/makeda.banza.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className="text-[#1D2130] mt-2 w-8 h-8"
                  icon="mdi:facebook"
                />
              </Link>
              <Link
                to="https://x.com/MakBanza16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className="text-[#1D2130] mt-2 w-8 h-8"
                  icon="mdi:twitter"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/makeda-banza-ba33b9248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className="text-[#1D2130] mt-2 w-8 h-8"
                  icon="mdi:linkedin"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
