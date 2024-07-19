import React from "react";
import ContactUs from "../components/ContactUs";
import ContactForm from "../assets/forms/ContactForm";
import MapComponent from "../components/MapComponent";

export default function Contact() {
  return (
    <div className="lg:space-y-28 space-y-10">
      <ContactUs />
      <ContactForm />
      <MapComponent />
    </div>
  );
}
