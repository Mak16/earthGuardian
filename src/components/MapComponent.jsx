import React from "react";

export default function MapComponent() {
  return (
    <div className="w-full mx-auto h-[40vh]">
      <iframe
        className="w-full h-full"
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2285.9966994264823!2d27.41281876939814!3d-11.627655668460413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scd!4v1721394924896!5m2!1sfr!2scd"
        allowFullScreen
        title="Google Map"
      />
    </div>
  );
}
