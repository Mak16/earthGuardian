import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import videoFile from "../assets/videos/Rio 2 - Bande-annonce [Officielle] VF HD.mp4";

export default function AboutUs() {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handlePlayButton = () => {
    const videoElement = document.getElementById("video");
    videoElement.play();
    setPlaying(true);
  };

  const handlePauseButton = () => {
    const videoElement = document.getElementById("video");
    videoElement.pause();
    setPlaying(false);
  };

  return (
    <div className="flex lg:flex-row flex-col w-[90%] lg:w-[90%] mx-auto space-y-8 lg:mt-5 py-8">
      <div className="lg:w-3/6 w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
        <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl"></div>
        <div className="lg:mt-1 -mt-8 lg:space-y-12 space-y-6">
          <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
            À PROPOS DE NOUS
          </h2>
          <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium">
            Nous créons une société durable, pour tous et pour toujours.
          </p>
          <p className="text-lg text-justify lg:text-left font-roboto">
            Bienvenue sur Earth Guardian, la plateforme qui rassemble ceux qui
            veulent agir pour un environnement plus propre et plus sain.
            Rejoignez-nous dans notre mission pour protéger notre planète contre
            la pollution.
          </p>
          <p className="text-lg text-justify lg:text-left font-roboto">
            Earth Guardian est une initiative dédiée à la lutte contre la
            pollution sous toutes ses formes. Nous mobilisons des volontaires,
            organisons des événements de sensibilisation et proposons des
            solutions concrètes pour un environnement durable.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <Link
              to="/about"
              className=" bg-[#70C174] font-roboto text-white py-3 px-5 rounded-md"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </div>
      <div
        className="lg:w-2/6 mx-auto w-full h-full relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!playing && hovered && (
          <button
            onClick={handlePlayButton}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-white border-none rounded cursor-pointer text-lg hover:bg-blue-700`}
          >
            <Icon
              icon="icon-park-solid:play"
              className="text-white font-roboto lg:w-14 md:w-12 md:h-12 lg:h-14 w-8 h-8"
            />
          </button>
        )}
        {playing && hovered && (
          <button
            onClick={handlePauseButton}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-white border-none rounded cursor-pointer text-lg hover:bg-blue-700`}
          >
            <Icon
              icon="lets-icons:stop-fill"
              className="text-white font-roboto lg:w-14 md:w-12 md:h-12 lg:h-14 w-8 h-8"
            />
          </button>
        )}
        <div className="w-full lg:h-[500px] h-[300px] rounded-xl overflow-hidden">
          <video
            id="video"
            className="w-full h-full object-cover"
            controls
            src={videoFile}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
