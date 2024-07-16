import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import LegendComponent from "./LegendComponent";

export default function Spend() {
  const [legend, setLegend] = useState([]);
  return (
    <div className="bg-black py-8">
      <div className="flex flex-col lg:flex-row w-[90%] lg:space-y-0 space-y-4 mx-auto items-center">
        <div className="lg:w-3/5 w-full space-y-4">
          <h3 className="text-white font-semibold font-roboto lg:text-5xl text-2xl lg:w-2/3 w-full text-center lg:text-left">
            Comment nous dépensons vos dons et où ils vont
          </h3>
          <p className="text-white font-thin font-roboto lg:text-left text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem,
            velit similique, eligendi nihil, tenetur consequatur consequuntur
            magni ut temporibus hic incidunt ipsam vitae et. Qui deserunt
            mollitia et maiores.
          </p>
          <div className="flex justify-center lg:justify-start">
            <LegendComponent legend={legend} />
          </div>
        </div>
        <div className="w-1/5" />
        <div className="lg:w-1/4 w-full">
          <DoughnutChart setLegend={setLegend} />
        </div>
      </div>
    </div>
  );
}
