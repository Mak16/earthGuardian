import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";

export default function JoinForm({ show, handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Réinitialiser les erreurs
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Ce champ est obligatoire";
    if (!lastName) newErrors.lastName = "Ce champ est obligatoire";
    if (!email) newErrors.email = "Ce champ est obligatoire";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const volunteerData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/volunteer",
        volunteerData
      );
      console.log(response.data);
      // Rafraîchir ou réinitialiser le formulaire après le succès
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrors({});
      handleClose(); // Fermer le modal après l'envoi réussi
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setErrors({ submit: "An error occurred while submitting the form." });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="bg-white rounded-lg p-8 z-10 lg:max-w-3xl h-[75%] overflow-scroll lg:overflow-hidden space-y-0 lg:space-y-8 w-full">
        <div className="flex flex-row justify-between">
          <div className="mt-4 space-y-4">
            <p className="text-[#1D2130] font-semibold font-roboto lg:text-5xl text-2xl lg:w-2/3 w-full text-left">
              Join as a volunteer
            </p>
            <p className="text-[#1D2130] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
              varius enim in eros elementum tristique.
            </p>
          </div>
          <Icon
            onClick={handleClose}
            className="text-[#1D2130] md:w-20 md:h-20 -mt-8 pt-4 w-14 h-14"
            icon="material-symbols:close"
          />
        </div>
        {errors.submit && <div className="text-red-500">{errors.submit}</div>}
        <form
          className="flex flex-col space-y-8 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex lg:flex-row flex-col mx-auto gap-8 justify-center">
            <div className="lg:w-1/2 w-full flex flex-col">
              <label
                className="text-[#1D2130] font-roboto text-sm"
                htmlFor="firstName"
              >
                Prenom
              </label>
              <input
                className={`border-b-[1px] py-2 ${
                  errors.firstName ? "border-red-500" : "border-[#E5E5E5]"
                }`}
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
              />
              {errors.firstName && (
                <div className="text-red-500">{errors.firstName}</div>
              )}
            </div>
            <div className="lg:w-1/2 w-full flex flex-col">
              <label
                className="text-[#1D2130] font-roboto text-sm"
                htmlFor="lastName"
              >
                Nom
              </label>
              <input
                className={`border-b-[1px] py-2 ${
                  errors.lastName ? "border-red-500" : "border-[#E5E5E5]"
                }`}
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
              />
              {errors.lastName && (
                <div className="text-red-500">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label
              className="text-[#1D2130] font-roboto text-sm"
              htmlFor="email"
            >
              Email Id
            </label>
            <input
              className={`border-b-[1px] py-2 ${
                errors.email ? "border-red-500" : "border-[#E5E5E5]"
              }`}
              type="text"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className="flex w-full flex-col space-y-4 justify-center">
            <label
              className="text-[#1D2130] font-roboto text-sm"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border-[1px] border-[#E5E5E5] p-3 rounded-lg h-[150px]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
            />
          </div>
          <button
            className="bg-[#70C174] text-white lg:w-1/3 w-full font-bold p-3 rounded-lg"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
