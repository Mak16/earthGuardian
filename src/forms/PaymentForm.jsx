import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { CINETPAY_API_KEY, CINETPAY_SITE_ID, SITE_URL } from "../../config";


const PaymentForm = ({ show, handleClose }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("CDF");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState({});
  const [status, setStatus] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!amount || !currency || !phoneNumber || !description) {
      setMessage("Tous les champs doivent être remplis.");
      return;
    }
    const newErrors = {};
    if (!firstName) newErrors.firstName = "Ce champ est obligatoire";
    if (!lastName) newErrors.lastName = "Ce champ est obligatoire";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const transaction_id = Math.floor(Math.random() * 100000000).toString();

    var data = JSON.stringify({
      apikey: CINETPAY_API_KEY,
      site_id: CINETPAY_SITE_ID,
      transaction_id,
      amount: amount,
      currency,
      description,
      customer_name: lastName,
      customer_surname: firstName,
      customer_phone_number: phoneNumber,
      notify_url: "https://kadea.co",
      return_url: `${SITE_URL}donate/${transaction_id}`,
      channels: "MOBILE_MONEY",
      lang: "FR",
    });

    var config = {
      method: "post",
      url: "https://api-checkout.cinetpay.com/v2/payment",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          console.log(response.data.code == 201);

          if (response.data.code == 201) {
            setMessage(response.data.description);
            setStatus("success");
            console.log(response.data?.data?.payment_url);
            window.location.href = response.data?.data?.payment_url;
            // Save donation data to backend
            const donationData = {
              firstName:firstName,
              lastName:lastName,
              phoneNumber:phoneNumber,
              amount:amount,
              currency:currency,
              description:description,
              status: status,
              transactionId: transaction_id,
            };
            axios.post(`http://localhost:9000/donation/create`, donationData)
          } else {
            setMessage(response.data.description);// Affiche le message d'erreur
            setStatus("failed") 
          }
        })
        .catch(function (error) {
          console.log(error);
          setMessage("Erreur dans le traitement de la transaction");
          setStatus("failed"); // En cas d'erreur, définir le statut comme "failed"
        });
    } catch (error) {
      console.error("Error in handlePayment:", error);
      setMessage(`Erreur : ${error.response?.data?.message || error.message}`);
      setStatus("failed"); // En cas d'erreur, définir le statut comme "failed"
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
      <div className="bg-white rounded-lg p-10 z-10 lg:max-w-3xl h-[90%] mt-12 overflow-scroll lg:overflow-hidden space-y-0 lg:space-y-8 w-full">
        <div className="flex flex-row justify-between">
          <div className="mt-4 space-y-4">
            <p className="text-[#1D2130] font-semibold font-roboto lg:text-5xl text-2xl lg:w-2/3 w-full text-left">
              Faire un don
            </p>
            <p className="text-[#1D2130] font-normal font-roboto">
              Agissez maintenant pour un monde sans pollution : chaque don est
              un pas vers le changement
            </p>
          </div>
          <Icon
            onClick={handleClose}
            className="text-[#1D2130] md:w-20 md:h-20 -mt-8 pt-4 w-14 h-14"
            icon="material-symbols:close"
          />
        </div>
        {error.submit && <div className="text-red-500">{error.submit}</div>}
        <form onSubmit={handlePayment} className="flex flex-col space-y-6 ">
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
              htmlFor="amount"
            >
              Montant
            </label>
            <input
              className={`border-b-[1px] py-2 ${
                error.amount ? "border-red-500" : "border-[#E5E5E5]"
              }`}
              type="text"
              placeholder="Montant"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
            />
            {error.amount && <div className="text-red-500">{error.amount}</div>}
          </div>
          <div className="w-full flex flex-col">
            <label
              className="text-[#1D2130] font-roboto text-sm"
              htmlFor="currency"
            >
              Devise
            </label>
            <input
              className={`border-b-[1px] py-2 ${
                error.amount ? "border-red-500" : "border-[#E5E5E5]"
              }`}
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              readOnly
              id="currency"
            />
            {error.amount && <div className="text-red-500">{error.amount}</div>}
          </div>
          <div className="w-full flex flex-col">
            <label
              className="text-[#1D2130] font-roboto text-sm"
              htmlFor="phoneNumber"
            >
              Numéro de téléphone
            </label>
            <input
              className={`border-b-[1px] py-2 ${
                error.phoneNumber ? "border-red-500" : "border-[#E5E5E5]"
              }`}
              type="text"
              placeholder="Numéro de téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
            />
            {error.phoneNumber && (
              <div className="text-red-500">{error.phoneNumber}</div>
            )}
          </div>
          <div className="w-full flex flex-col">
            <label
              className="text-[#1D2130] font-roboto text-sm"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className={`border-b-[1px] py-2 ${
                error.email ? "border-red-500" : "border-[#E5E5E5]"
              }`}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
            {error.email && <div className="text-red-500">{error.email}</div>}
          </div>
          <button
            className="bg-[#70C174] text-white lg:w-1/3 w-full font-bold p-3 rounded-lg"
            type="submit"
          >
            Envoyer
          </button>
          {message && <p className="font-roboto text-[#1D2130]">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
