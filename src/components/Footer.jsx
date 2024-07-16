import React from "react";
import logo from "../assets/earth_Guardian_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="w-[90%] m-auto flex lg:flex-row flex-col lg:py-16 py-10">
        <div className="lg:w-1/3 w-full lg:mb-0 mb-4">
          <img
            src={logo}
            className="sm:max-w-[130px] py-2 max-w-[100px]"
            alt=""
          />
        </div>
        <div className="lg:w-1/3 w-full flex flex-row">
          <div className="flex flex-col w-1/3 space-y-4">
            <p className="text-white font-semibold font-roboto">Notre équipe</p>
            <Link className="text-white font-roboto font-thin" to="/">
              À propos de nous
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Équipe
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Ce que nous faisons
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Contact
            </Link>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <p className="text-white font-roboto font-semibold">Plus</p>
            <Link className="text-white font-roboto font-thin" to="/">
              Projets
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Événements
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Dons
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Blog
            </Link>
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <p className="text-white font-roboto font-semibold">Contact</p>
            <Link className="text-white font-roboto font-thin" to="/">
              Facebook
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Instagram
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              Twitter
            </Link>
            <Link className="text-white font-roboto font-thin" to="/">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 w-full space-y-5 lg:mt-0 mt-4">
          <p className="text-white font-roboto text-left font-semibold text-2xl lg:text-4xl lg:w-[80%] w-full">
            S'abonner pour recevoir les mises à jour
          </p>
          <div className="flex flex-row w-full">
            <input
              type="text"
              placeholder="Votre mail"
              className="rounded-l-sm mr-0 w-full bg-black border-[#EBF0F9] pl-3 border-[1px]"
            />
            <button className="bg-white w-1/3 rounded-sm ml-0 p-3">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
