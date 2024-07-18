import moment from "moment";
import React from "react";
import bg1 from "../assets/images/projects/Image1.png";
import bg2 from "../assets/images/projects/Image.png";
import bg3 from "../assets/images/projects/Image2.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mission 40K : Plantation d'arbres",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
    bg: bg1,
  },
  {
    title: "Programme hebdomadaire de propreté dans la ville",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20111231",
    bg: bg2,
  },
  {
    title: "Programme de sécurité pour la faune 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
    bg: bg3,
  },
];
function OneProject({ project }) {
  return (
    <div
      className=" bg-cover relative flex rounded-lg flex-col lg:p-14 p-5 space-y-8"
      style={{ backgroundImage: `url(${project.bg})` }}
    >
      <div className="absolute z-0 inset-0 bg-black rounded-rounded-lg rounded-xl opacity-35"></div>
      <h3 className="z-10 font-roboto font-semibold lg:text-3xl text-2xl text-white">
        {project.title}
      </h3>
      <p className=" z-10 text-white"> {project.description} </p>
      <div className="z-10 bg-white rounded-md lg:w-1/3 w-1/2 text-center py-3 px-4">
        <Link className="text-[#1D2130]" to={project.info}>
          Voir plus
        </Link>
      </div>
    </div>
  );
}
export default function Project() {
  const sortedProjects = projects.sort((a, b) =>
    moment(b.date, "YYYYMMDD").diff(moment(a.date, "YYYYMMDD"))
  );
  return (
    <div className="flex flex-col w-[90%] lg:w-[90%] mx-auto space-y-8 lg:mt-5 py-16">
      <div className="lg:w-3/6 w-full flex lg:flex-row flex-col lg:space-x-5 space-x-0">
        <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl"></div>
        <div className="lg:mt-1 -mt-8  lg:space-y-12 space-y-6">
          <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
            PROJETS RÉALISÉS
          </h2>
          <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium">
            Nous créons une société durable, pour tous et pour toujours.
          </p>
        </div>
      </div>
      <div className="w-[100%] m-auto flex lg:flex-row flex-col justify-center gap-6">
        {sortedProjects.slice(0, 3).map((data, index) => (
          <OneProject key={index} project={data} />
        ))}
      </div>
    </div>
  );
}
