import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/news/Thumbnail.png";
import image1 from "../assets/images/news/Thumbnail1.png";
import image2 from "../assets/images/news/Thumbnail2.png";
import image3 from "../assets/images/news/Thumbnail3.png";
import image4 from "../assets/images/news/Image.png";
import image5 from "../assets/images/news/Image1.png";
import moment from "moment";

const news = [
  {
    title: "Ne pas détruire la verdure et ne pas gâcher le paysage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
    source: image,
    status: "top",
  },
  {
    title:
      "Pourquoi la sauvegarde de la faune et de la flore est extrêmement importante",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
    source: image4,
    status: "top",
  },
  {
    title: "S'occuper du présent, c'est s'occuper de l'avenir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
    source: image5,
    status: "top",
  },
  {
    title: "Le changement climatique est-il plus rapide que prévu ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20111231",
    source: image1,
    status: "",
  },
  {
    title: "10 faits marquants sur les parcs éoliens que vous ignoriez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
    source: image2,
    status: "",
  },
  {
    title: "Notre objectif est de rendre l'eau accessible à tous",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
    source: image3,
    status: "",
  },
];

function TopNew({
  newInfo,
  newClass,
  titleClass,
  descriptionClass,
  imageContenairClass,
}) {
  return (
    <div className={newClass}>
      <div className={imageContenairClass}>
        <img src={newInfo.source} className="w-full" alt="" />
      </div>
      <div className="space-y-5">
        <Link to={newInfo.info}>
          <h3 className={titleClass}>{newInfo.title}</h3>
          <p className={descriptionClass}> {newInfo.description} </p>
        </Link>
      </div>
    </div>
  );
}

export default function TopNews() {
  const sortedNews = news.sort((a, b) =>
    moment(b.date, "YYYYMMDD").diff(moment(a.date, "YYYYMMDD"))
  );
  const topNews = news
    .filter((item) => item.status === "top")
    .sort((a, b) => moment(b.date, "YYYYMMDD").diff(moment(a.date, "YYYYMMDD")))
    .slice(0, 3);
  return (
    <div className="space-y-16">
      <div className="rounded-lg bg-[#EFF7F2]">
        <div className="flex lg:flex-row flex-col space-y-8 lg:mt-28 mt-24 py-8 w-[90%] lg:w-[90%] mx-auto">
          <div className="lg:w-3/6 w-full flex lg:flex-row mx-auto flex-col space-x-0 lg:space-x-4">
            <div className="border-t-2 bg-[#1D2130] lg:mt-4 mb-4 h-1 lg:w-[15%] w-12 rounded-xl"></div>
            <div className="lg:mt-1 -mt-8 lg:space-y-12 space-y-6">
              <h2 className="font-roboto text-xl text-center text-[#1D2130] lg:text-left">
                TOP NEWS
              </h2>
              <p className="font-roboto lg:text-5xl text-2xl text-center lg:text-left font-medium">
                Notre objectif est de rendre l'eau accessible à tous
              </p>
              <p className="text-sm text-justify lg:text-left">
                À propos de nous Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam a deserunt placeat, aut unde pariatur
                aliquid aperiam numquam tempore. Quos animi, qui doloribus
                dolore commodi sunt vel hic error et.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <Link
                  to="/"
                  className=" bg-[#70C174] font-roboto text-white py-3 px-5 rounded-md"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 mx-auto w-full h-full bg-white lg:p-4 py-2 px-4 rounded-xl">
            {topNews.slice(0, 3).map((data, index) => (
              <TopNew
                key={index}
                newInfo={data}
                newClass="flex lg:flex-row flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 mt-4"
                titleClass={
                  "font-roboto font-semibold text-lg lg:text-left text-center text-[#1C1D28]"
                }
                descriptionClass="text-[#1C1D28] lg:text-left text-center font-roboto font-thin text-sm"
                imageContenairClass="lg:w-80 w-full lg:h-28 h-40 overflow-hidden rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[90%] space-y-12 mx-auto">
        <div className="space-y-4">
          <h2 className="font-roboto font-semibold lg:text-5xl text-2xl text-center text-[#1D2130]">
            Lire nos dernières nouvelles
          </h2>
          <p className="font-roboto text-lg lg:w-2/5 w-full mx-auto text-center text-[#1D2130]">
          Découvrez nos dernières actualités, communiqués de presse, et couvertures médiatiques. Restez informé sur nos initiatives et impact grâce à nos mises à jour régulières et articles.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          {sortedNews.slice(0, 4).map((data, index) => (
            <TopNew
              key={index}
              newInfo={data}
              newClass="flex flex-col"
              titleClass={
                "font-roboto font-semibold text-xl  mt-4 lg:text-left text-center text-[#1C1D28]"
              }
              descriptionClass="text-[#1C1D28] lg:text-left  mt-4 text-center font-roboto"
              imageContenairClass="lg:h-52 overflow-hidden rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
