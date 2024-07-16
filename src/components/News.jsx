import React from "react";
import image from "../assets/images/news/Thumbnail.png";
import image1 from "../assets/images/news/Thumbnail1.png";
import image2 from "../assets/images/news/Thumbnail2.png";
import image3 from "../assets/images/news/Thumbnail3.png";
import { Link } from "react-router-dom";
import moment from "moment";

const news = [
  {
    title: "Ne pas détruire la verdure et ne pas gâcher le paysage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
    source: image,
  },
  {
    title: "Le changement climatique est-il plus rapide que prévu ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20111231",
    source: image1,
  },
  {
    title: "10 faits marquants sur les parcs éoliens que vous ignoriez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
    source: image2,
  },
  {
    title: "Notre objectif est de rendre l'eau accessible à tous",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
    source: image3,
  },
];

function New({ newInfo }) {
  return (
    <div className="flex flex-col">
      <div className="w-full rounded-3xl">
        <img src={newInfo.source} className="w-full" alt="" />
      </div>
      <div className="space-y-5">
        <Link to={newInfo.info}>
          <h3 className="font-roboto font-semibold text-xl text-[#1C1D28]">
            {newInfo.title}
          </h3>
          <p className="text-[#1C1D28] font-roboto"> {newInfo.description} </p>
        </Link>
      </div>
    </div>
  );
}

export default function News() {
  const sortedNews = news.sort((a, b) =>
    moment(b.date, "YYYYMMDD").diff(moment(a.date, "YYYYMMDD"))
  );
  return (
    <div className="w-[90%] m-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-1">
        <h2 className="text-xl font-roboto lg:text-lg text-center text-[#1D2130] lg:text-left">
          LIRE NOS ACTUALITÉS
        </h2>
        <div className="border-t-2 bg-gray-300 my-6 mr-0 w-[85%]"></div>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-x-10 space-x-0 space-y-10 lg:space-y-0 py-10">
        {sortedNews.slice(0, 4).map((data, index) => (
          <New key={index} newInfo={data} />
        ))}
      </div>
    </div>
  );
}
