import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";

function ContactDetails() {
  const [text, setText] = useState("");
  const onInputChange = (e) => {
    setText(e.target.value);
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
                name="Vorname"
                label="Vorname"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                name="Nachname"
                label="Nachname"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <TextField
                name="Vorname"
                label="Straße und Hausnummer"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <TextField
                    name="PLZ"
                    label="PLZ"
                    value={text}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="col-md-9">
                  <TextField
                    name="Ort"
                    label="Ort"
                    value={text}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="Telefon"
                label="Telefon"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="Telefax"
                label="Telefax"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="Telefon"
                label="E-Mail Adresse"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <Button>Return</Button>
        <Button style={{ marginLeft: "45px" }} variant="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default ContactDetails;
