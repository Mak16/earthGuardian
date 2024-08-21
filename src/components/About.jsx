import React, { useState } from "react";
import { Icon } from "@iconify/react";
import videoFile from "../assets/videos/Rio 2 - Bande-annonce [Officielle] VF HD.mp4";

export default function About() {
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
    <div className="flex flex-col w-[90%] mx-auto lg:top-48 top-28 relative z-10">
      <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-5 space-x-0">
        <div className="flex lg:flex-row flex-col lg:w-3/5 w-full space-x-5">
          <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl"></div>
          <div className="lg:mt-1 -mt-8 lg:space-y-12 space-y-6">
            <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
              À PROPOS DE NOUS
            </h2>
            <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium text-[#1D2130]">
              Nous sommes une équipe à but non lucratif qui travaille dans le
              monde entier
            </p>
          </div>
        </div>
        <div className="lg:w-2/5 w-full justify-center flex flex-col lg:mt-20 -mt-8 lg:space-y-8 space-y-6">
          <p className="font-roboto text-justify lg:text-left font-semibold text-xl">
          Ensemble, nous travaillons pour un avenir plus durable et sain.
          </p>
          <p className="text-justify lg:text-left">
          Earth Guardian est dédié à la protection de notre planète. Nous nous engageons à combattre la pollution, à promouvoir la durabilité, et à renforcer les communautés. Avec des initiatives telles que la reforestation, la préservation des ressources naturelles, et la protection des animaux, nous travaillons chaque jour pour un avenir plus vert et plus sain pour tous. Rejoignez-nous dans notre mission pour faire la différence.
          </p>
        </div>
      </div>
      <div>
        <div
          className="mx-auto w-full h-[50vh] mt-16 relative"
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
          <div className="w-full h-full rounded-xl overflow-hidden">
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
    </div>
  );
}
