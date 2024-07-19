import React from "react";
import TopNews from "../components/TopNews";
import Events from "../components/Events";

export default function Media() {
  return (
    <div className="lg:space-y-28 space-y-10">
      <TopNews />
      <Events />
    </div>
  );
}
