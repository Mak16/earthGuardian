import React from "react";
import WeDo from "../components/WeDo";
import Action from "../components/Action";
import ProjectDone from "../components/ProjectDone";
import Donate from "../components/Donate";
import News from "../components/News";
import Events from "../components/Events";

export default function WhatWeDo() {
  return (
    <div className="lg:space-y-28 space-y-10">
      <WeDo />
      <Action />
      <ProjectDone />
      <Donate />
      <News />
      <Events />
    </div>
  );
}
