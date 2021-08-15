import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";
import validate from "./ValidateData";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (value === "") {
      setEmail({
        status: "",
        error: "",
      });
      return;
    }
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setEmail({
          status: "error",
          error: "Bitte geben Sie eine gültige Email-Adresse ein",
        });
      }else {
        setEmail({
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
                value={values.vorname.replace(/[^a-zA-Z]/gi, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.vorname}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                name="nachname"
                label="Nachname"
                value={values.nachname.replace(/[^a-zA-Z]/gi, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.nachname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <TextField
                name="straße"
                label="Straße und Hausnummer"
                value={values.straße.replace(/[^a-zA-Z0-9_ ]/gi, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.straße}
              />
            </div>

            <div className="col-md-6 postal">
              <TextField
                className="postal-code"
                name="plz"
                label="PLZ"
                maxLength="5"
                value={values.plz.replace(/\D/g, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.plz}
              />

              <TextField
                className="postal-location"
                name="ort"
                label="Ort"
                value={values.ort.replace(/[^a-zA-Z]/gi, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.ort}
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
                value={values.telefon.replace(/[^0-9+]/, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.telefon}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="telefax"
                label="Telefax"
                value={values.telefax.replace(/[^0-9+\-()]/, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.telefax}
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
