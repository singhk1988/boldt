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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const message = "Email address is invalid";
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({
          ...errors,
          [name]: message,
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return (
    <div>
      <div className="contact-save" align="right">
        <Button variant="primary">Unterbrechen & Specichern</Button>
      </div>
      <div className="contact" align="left">
        <h1>
          <b className="contact-title">Kontaktdaten</b>
        </h1>
        <h5>Bitte tragen Sie hier Ihre Kontaktdaten ein.</h5>
        <div className="contact-details">
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
                value={values.straße.replace(/[^a-zA-Z0-9]/gi, "")}
                onChange={(e) => handleChange(e)}
                helpText={errors.straße}
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <TextField
                    name="plz"
                    label="PLZ"
                    maxLength="5"
                    value={values.plz.replace(/\D/g, "")}
                    onChange={(e) => handleChange(e)}
                    helpText={errors.plz}
                  />
                </div>
                <div className="col-md-9">
                  <TextField
                    name="ort"
                    label="Ort"
                    value={values.ort.replace(/[^a-zA-Z]/gi, "")}
                    onChange={(e) => handleChange(e)}
                    helpText={errors.ort}
                  />
                </div>
              </div>
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
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="email"
                label="E-Mail Adresse"
                type="email"
                value={values.email}
                onChange={(e) => handleChange(e)}
                helpText={errors.email}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <Button>Return</Button>
        <Button
          style={{ marginLeft: "45px" }}
          variant="primary"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ContactDetails;
