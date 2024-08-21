import React from "react";
import { Link } from "react-router-dom";
const firstName="makeda"
const lastName="Banza"
const amount="10"
const currency="CDF"

export default function ReturnPage() {
  return (
    <div className="w-[90%] lg:w-[60%] my-10 rounded-sm p-4 mx-auto flex flex-col justify-center items-center space-y-20 h-[65vh] bg-white shadow-lg">
      <p className="text-center font-roboto text-[#1D2130] text-xl lg:text-2xl">Merci <strong>{firstName} {lastName}</strong> pour votre don pour la communauté de {amount} {currency} </p>
      <Link className="bg-[#70C174] text-white text-center lg:w-1/3 w-full font-bold p-3 rounded-lg" to="/">OK</Link>
    </div>
  );
}
