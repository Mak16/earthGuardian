import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import moment from "moment";

const events = [
  {
    title: "Dites non au plastique et sauvez la planète",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20121031",
  },
  {
    title: "Programme de nettoyage hebdomadaire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20111231",
  },
  {
    title: "Dites non au plastique et sauvez la planète",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
  },
  {
    title: "Programme de nettoyage hebdomadaire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    info: "/",
    date: "20240322",
  },
];

function Event({ event }) {
  const eventDate = moment(event.date, "YYYYMMDD");
  const eventDay = eventDate.format("DD");
  const eventMonth = eventDate.format("MMM");
  return (
    <div className="flex flex-row lg:space-x-5 space-x-4 lg:w-1/2 w-full mx-auto justify-center items-center h-48 rounded-lg bg-[#BEF3C0]">
      <div className="flex flex-col lg:w-1/4 w:1/5">
        <p className="lg:text-5xl text-3xl font-roboto font-semibold text-[#1D2130]">
          {eventDay}
        </p>
        <p className="text-[#1D2130] font-roboto">{eventMonth}</p>
      </div>
      <div className="lg:w-2/4 w-3/5">
        <div className="flex flex-row items-center lg:space-x-4 space-x-2">
          <p className="font-roboto text-[#1D2130] text-sm">NEXT EVENTS</p>
          <div className="border-t-2 bg-[#1D2130] mb-0 h-1 lg:w-[15%] w-14 rounded-xl"></div>
        </div>
        <p className="text-[#1D2130] font-roboto font-semibold lg:text-2xl text-xl">
          {event.title}
        </p>
      </div>
      <div className="bg-white lg:w-16 lg:h-16 w-12 h-12 rounded-full flex items-center justify-center">
        <Link to={event.info}>
          <Icon
            className="text-[#1D2130] md:w-14 md:h-14 mt-2 w-full text-center"
            icon="system-uicons:arrow-right"
          />
        </Link>
      </div>
    </div>
  );
}
export default function Events() {
  const sortedEvents = events.sort((a, b) =>
    moment(b.date, "YYYYMMDD").diff(moment(a.date, "YYYYMMDD"))
  );
  return (
    <div className="w-[90%] m-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-1">
        <h2 className="text-xl font-roboto lg:text-lg text-center text-[#1D2130] lg:text-left">
          NOS ÉVÉNEMENTS
        </h2>
        <div className="border-t-2 bg-gray-300 my-6 mr-0 w-[85%]"></div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-10 space-x-0 space-y-10 lg:space-y-0 lg:py-14 py-5">
        {sortedEvents.slice(0, 2).map((data, index) => (
          <Event key={index} event={data} />
        ))}
      </div>
    </div>
  );
}
