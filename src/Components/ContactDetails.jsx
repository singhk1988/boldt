import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";
import validate from "./ValidateData";
import { Input } from "antd";

function ContactDetails() {
  const [values, setValues] = useState({
    vorname: "",
    nachname: "",
    straße: "",
    plz: "",
    ort: "",
    telefon: "+49",
    telefax: "",
    email: "",
  });

  const [email, setEmail] = useState({ error: "", status: "" });
  const [vorname, setVorname] = useState({ error: "", status: "" });
  const [nachname, setNachname] = useState({ error: "", status: "" });
  const [address, setAddress] = useState({ error: "", status: "" });
  const [plz, setplz] = useState({ error: "", status: "" });
  const [location, setlocation] = useState({ error: "", status: "" });
  const [telefex, setTelefex] = useState({ error: "", status: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // const onError = (e) => {
  //   const { name, value } = e.target;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (value === "") {
        setEmail({
          status: "",
          error: "",
        });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setEmail({
          status: "error",
          error: "Bitte geben Sie eine gültige Email-Adresse ein",
        });
      } else {
        setEmail({
          status: "",
          error: "",
        });
      }
    } else if (name === "vorname") {
      if (value === "") {
        setVorname({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setVorname({
          status: "error",
          error: "vorname not valid",
        });
      } else {
        setVorname({
          status: "",
          error: "",
        });
      }
    } else if (name === "nachname") {
      if (value === "") {
        setNachname({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setNachname({
          status: "error",
          error: "nachname not valid",
        });
      } else {
        setNachname({
          status: "",
          error: "",
        });
      }
    } else if (name === "straße") {
      if (value === "") {
        setAddress({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        setAddress({
          status: "error",
          error: "address not valid",
        });
      } else {
        setAddress({
          status: "",
          error: "",
        });
      }
    } else if (name === "plz") {
      if (value === "") {
        setplz({
          status: "",
          error: "",
        });
      } else if (!/\b\d{5}\b/g.test(value)) {
        setplz({
          status: "error",
          error: "please enter valid data",
        });
      } else {
        setplz({
          status: "",
          error: "",
        });
      }
    } else if (name === "ort") {
      if (value === "") {
        setlocation({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setlocation({
          status: "error",
          error: "please enter valid data",
        });
      } else {
        setlocation({
          status: "",
          error: "",
        });
      }
    } else if (name === "telefax") {
      if (value === "") {
        setTelefex({
          status: "",
          error: "",
        });
      } else if (!/^[0-9+(-)-]+$/.test(value)) {
        setTelefex({
          status: "error",
          error: "please enter valid data",
        });
      } else {
        setTelefex({
          status: "",
          error: "",
        });
      }
    }
  };

  return (
    <div>
      <div className="contact" align="left">
        <h1>
          <b className="title">Kontaktdaten</b>
        </h1>
        <div className="title-description">
          Bitte tragen Sie hier Ihre Kontaktdaten ein.
        </div>
        <div className="margin-body">
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="vorname"
                label="Vorname"
                status={vorname.status}
                value={values.vorname}
                onChange={(e) => handleChange(e)}
                helpText={vorname.error}
                onBlur={onBlur}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="nachname"
                label="Nachname"
                status={nachname.status}
                value={values.nachname}
                onChange={(e) => handleChange(e)}
                helpText={nachname.error}
                onBlur={onBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="straße"
                label="Straße und Hausnummer"
                status={address.status}
                value={values.straße}
                onChange={(e) => handleChange(e)}
                helpText={address.error}
                onBlur={onBlur}
              />
            </div>

            <div className="col-md-6 postal">
              <TextField
                className="postal-code"
                name="plz"
                // type="number"
                label="PLZ"
                minLength="5"
                maxLength="5"
                status={plz.status}
                value={values.plz}
                onChange={(e) => handleChange(e)}
                helpText={plz.error}
                onBlur={onBlur}
              />

              <TextField
                className="postal-location"
                name="ort"
                label="Ort"
                status={location.status}
                value={values.ort}
                onChange={(e) => handleChange(e)}
                helpText={location.error}
                onBlur={onBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="telefon"
                label="Telefon"
                type="tel"
                maxLength="15"
                value={values.telefon}
                onChange={(e) => handleChange(e)}
                helpText={errors.telefon}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="telefax"
                label="Telefax"
                value={values.telefax}
                status={telefex.status}
                onChange={(e) => handleChange(e)}
                helpText={telefex.error}
                onBlur={onBlur}
              />
            </div>
          </div>
          <div className="row" style={{ height: "70px" }}>
            <div className="col-md-6">
              <TextField
                name="email"
                label="E-Mail Adresse"
                type="email"
                status={email.status}
                value={values.email}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={email.error} //{errors.email}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
