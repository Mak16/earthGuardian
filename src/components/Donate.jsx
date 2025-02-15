import React, { useState } from "react";
import bgImg from "../assets/images/to-protect-450596.jpg";
import { Link } from "react-router-dom";
import JoinForm from "../forms/JoinForm";
import PaymentForm from "../forms/PaymentForm";

export default function Donate() {
  const [show, setShow] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showDonateModal = () => {
    setShowDonate(true);
  };

  const hideDonateModal = () => {
    setShowDonate(false);
  };
  return (
    <div
      className="w-[90%] bg-cover flex justify-center items-center bg-center bg-no-repeat h-[70vh] relative mx-auto my-16 rounded-2xl"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute z-0 inset-0 bg-black rounded-rounded-lg opacity-50 rounded-2xl"></div>
      <div className="z-10 lg:w-2/5 w-[90%]">
        <p className="font-roboto text-white lg:text-5xl space-y-6 text-2xl text-center font-medium">
          Vous pouvez contribuer à rendre l'environnement plus vert !
        </p>
        <div className="flex lg:flex-row flex-col lg:space-x-5 space-x-0 space-y-4 lg:space-y-0 justify-center items-center mt-5">
          <div className="bg-[#70C174] w-60 flex justify-center items-center h-12 rounded-md">
            <Link onClick={showModal} className="text-white text-center">
              Adhérer comme bénévole
            </Link>
          </div>
          <div className="bg-white  w-60 flex justify-center items-center h-12 rounded-md">
            <Link onClick={showDonateModal} className="text-[#1D2130]">
              Faire un don
            </Link>
          </div>
        </div>
        <JoinForm show={show} handleClose={hideModal} />
        <PaymentForm show={showDonate} handleClose={hideDonateModal} />
      </div>
    </div>
  );
}
