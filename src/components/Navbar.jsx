/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../assets/earth_Guardian_logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const links = [
    {
      name: "Accueil",
      link: "",
      className:
        "text-[#525560] font-semibold font-roboto flex justify-center md:text-xl semibold  items-center text-center text-center h-[50px]",
    },
    {
      name: "Apropos",
      link: "",
      className:
        "text-[#525560] font-semibold font-roboto flex justify-center md:text-xl items-center text-center text-center h-[50px]",
    },
    {
      name: "Ce que nous faisons",
      link: "",
      className:
        "text-[#525560] font-semibold font-roboto flex justify-center md:text-xl items-center text-center text-center h-[50px]",
    },
    {
      name: "Media",
      link: "",
      className:
        "text-[#525560] font-semibold font-roboto flex justify-center md:text-xl items-center text-center text-center h-[50px]",
    },
    {
      name: "Contact",
      link: "",
      className:
        "text-[#525560] font-semibold font-roboto flex justify-center md:text-xl items-center text-center text-center h-[50px]",
    },
    {
      name: `Faire un don`,
      link: "",
      className:
        "bg-[#1D2130] font-bold font-roboto text-white flex justify-center md:text-xl items-center text-center text-center w-[200px]  h-[50px] rounded-[5px] px-1",
    },
  ];
  return (
    <>
      <div className="relative z-50">
        <div className="flex flex-row lg:justify-around justify-between  xl:py-2 py-1 xl:px-10 px-5 top-0 bg-white items-center fixed w-full">
          <Link to="">
            <img
              className="sm:max-w-[130px] py-2 max-w-[100px]"
              src={img}
              alt="EARTH GUARDIAN"
            />
          </Link>
          <ul className="hidden lg:flex gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.link} className={link.className}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute z-10 right-4 top-3 cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <Icon
                className="text-[#1D2130] md:w-20 md:h-20 mt-2 w-10 h-10"
                icon="material-symbols:close"
              />
            ) : (
              <Icon
                className="text-[#1D2130] md:w-20 md:h-20 mt-2 w-10 h-14"
                icon="material-symbols-light:menu"
              />
            )}
          </div>
          <ul
            className={` bg-white lg:flex pl-5 lg:pl-0  lg:items-center lg:pb-0 pb-12 z-10 absolute left-0 w-full lg:z-auto gap-4 transition-all duration-300 ease-in flex lg:flex-row flex-col justify-between 
                    ${
                      isOpen
                        ? "top-16 md:top-24 rounded-b-2xl items-center"
                        : "top-[-490px] rounded-b-2xl items-center"
                    }`}
          >
            {links.map((link, index) => (
              <li className={link.className} key={index}>
                <Link to={link.link} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
